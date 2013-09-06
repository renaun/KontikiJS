/*
Copyright 2012-2013 Renaun Erickson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@author Renaun Erickson / renaun.com / @renaun
*/

// Mostly taken from Howler.js
// https://github.com/goldfire/howler.js/blob/master/howler.js

package flash.media
{
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.net.URLRequest;
import flash.utils.ByteArray;
import flash.utils.FlashTimingEngine;

import randori.webkit.html.canvas.ArrayBuffer;
import randori.webkit.modules.webaudio.AudioBuffer;
import randori.webkit.modules.webaudio.AudioContext;
import randori.webkit.page.Window;
import randori.webkit.xml.XMLHttpRequest;

public class Sound extends EventDispatcher
{
	public function Sound(urlRequest:URLRequest = null, context:SoundLoaderContext = null)
	{
		super();
		// Implementation Detail force global sound transform
		SoundMixer.soundTransform;
		if (urlRequest)
			load(urlRequest, context);
	}

	public function load(stream:URLRequest, context:SoundLoaderContext = null):void
	{
		// Maybe handle base64 data at some point
		url = stream.url;
		if (SoundMixer.cache[url]) // already loaded
		{	
			dispatchEvent(new Event(Event.COMPLETE));
			return;
		}
		if (SoundMixer.usingWebAudio)
		{
			xhr = new XMLHttpRequest();
			xhr.open("GET", stream.url, true);
			xhr.responseType = "arraybuffer";
// RANDORI BUG: Needs $createStaticDelegate applied for it work 
			xhr.onload = completeHandler;
			
			try {
				xhr.send();
			} catch (error:Error) {
				xhr.onerror();
			}
				
		}
		else
		{
			
		}
	}
	
	protected function completeHandler():void
	{
		var that:Object = this;
		try
		{
			(SoundMixer.ctx as AudioContext).decodeAudioData(xhr.response as ArrayBuffer, function(buffer:AudioBuffer):void {
					if (buffer) {
						that.loadSound(buffer);
					}
				}
			);
		}
		catch (error:Error)
		{
			dispatchEvent(new Event(Event.COMPLETE));
			isLoaded = true;
		}
	}
	
	protected function loadSound(buffer:AudioBuffer):void
	{
		Window.console.log("url: " + url);
		SoundMixer.cache[url] = buffer;
		length = buffer.duration;
		dispatchEvent(new Event(Event.COMPLETE));
		isLoaded = true;
	}
	
	public function loadCompressedDataFromByteArray(bytes:ByteArray, length:int):void { FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Sound.loadCompressedDataFromByteArray() $$$$"); } // TODO check sig
	public function play(startTime:Number = 0, loops:int = 0, sndTransform:SoundTransform = null):SoundChannel 
	{ 
		if (!soundChannel)
			soundChannel = new SoundChannel();
		else
			soundChannel.stop();
		
		if (!SoundMixer.cache[url])
			return soundChannel;
		if (SoundMixer.usingWebAudio)
		{
			if (!node)
			{
				node = SoundMixer.getGainNode() as Object;
				node.connect((SoundMixer.ctx as AudioContext).destination);
			}
			
			if (node.bufferSource && node.bufferSource.loop)
				node.bufferSource.stop(0);
			
			node.bufferSource = SoundMixer.ctx.createBufferSource();
			if (!node.bufferSource)
				return soundChannel;// TODO probably through an error here
			// setup the buffer source for playback
			node.bufferSource.connect(node);
			node.bufferSource.loop = (loops > 0);
			node.bufferSource.buffer = SoundMixer.cache[url];
			node.bufferSource.connect((SoundMixer.ctx as AudioContext).destination);//node.panner);
			
			
			node.gain.value = 1;// TODO
			node.bufferSource.start(startTime);
			soundChannel.soundTransform.buffer = node.bufferSource;
		}
		return soundChannel;  
	}
	
	public var bytesTotal:int = 0;
	public var bytesLoaded:int = 0;
	public function close():void { }
	public var length:Number = 0;

	// HTML Implementation Specifics
	private var xhr:XMLHttpRequest;
	private var url:String;
	public var isLoaded:Boolean = false;

	private var soundChannel:SoundChannel;

	private var node:Object;
}
}