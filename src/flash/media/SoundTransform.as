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
	import flash.utils.Dictionary;
	
	import randori.webkit.modules.webaudio.AudioBufferSourceNode;

public class SoundTransform
{
	public function SoundTransform(vol:Number = 1, panning:Number = 0)
	{
		soundID = "SoundTransform" + Math.floor(Math.random() * 0xffff);
	}
	
	public var transforms:Dictionary;
	
	public var pan:*;
	
	private var _volume:Number;

	public function get volume():Number
	{
		return _volume;
	}

	public function set volume(value:Number):void
	{
		_volume = value;
	}
	
	// HTML5 Implementation Specifics
	
	public var buffer:AudioBufferSourceNode;
	public var soundID:String;
	
	public function addTransform(transform:SoundTransform):void
	{
		if (!transforms)
			transforms = new Dictionary();
		transforms[transform] = transform;
	}
	
	public function removeTransform(transform:SoundTransform):void
	{
		if (!transforms)
			return;
		transforms[transform] = null;
		delete transforms[transform];
	}
	
	public function toString():String
	{
		return soundID;
	}

}
}