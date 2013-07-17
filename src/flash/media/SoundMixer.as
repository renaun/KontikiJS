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

package flash.media
{
import randori.webkit.modules.webaudio.AudioContext;
import randori.webkit.modules.webaudio.GainNode;

import renaun.html.stub.JSAudio;
import renaun.html.stub.JSWebKitAudioContext;

public class SoundMixer
{
	public static function stopAll():void 
	{  
		for each (var transform:SoundTransform in soundTransformInstance.transforms)
			if (transform.buffer)
				transform.buffer.stop(0);
	}
	
	// Global Web Audio Varibales
	public static var cache:Object = {};
	public static var ctx:Object = null;
	public static var usingWebAudio:Boolean = true;
	public static var noAudio:Boolean = false;
	public static var codecs:Object = {};
	public static var masterGain:GainNode;
	
	// Implementation Details
	protected static var soundTransformInstance:SoundTransform;

	public static function get soundTransform():SoundTransform
	{
		// Global is not setup so do everything here
		if (!soundTransformInstance)
		{
			if (typeof AudioContext !== 'undefined') {
				ctx = new AudioContext();
			} else if (typeof JSWebKitAudioContext !== 'undefined') {
				ctx = new JSWebKitAudioContext();
			} else if (typeof JSAudio !== 'undefined') {
				usingWebAudio = false;
			} else {
				usingWebAudio = false;
				noAudio = true;
			}
			
			if (usingWebAudio) 
			{
				masterGain = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
				masterGain.gain.value = 1;
				masterGain.connect(ctx.destination);
			}
			
			// check for browser codec support
			var audioTest:JSAudio = null;
			if (!noAudio) {
				audioTest = new JSAudio();
				codecs = {
					mp3: !!audioTest.canPlayType('audio/mpeg;').replace(/^no$/,''),
						opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,''),
						ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,''),
						wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/,''),
						m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/,''),
						webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,'')
				};
			}
			
			soundTransformInstance = new SoundTransform(1, 0);
		}
		
		
		
		
		return soundTransformInstance;
	}
	
	public static function getGainNode():GainNode
	{
		var node:GainNode = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
		// implement pool
		return node;
	}
	
	public function SoundMixer()
	{
	}
}
}