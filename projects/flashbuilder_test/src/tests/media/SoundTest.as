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

package tests.media
{
import flash.events.Event;
import flash.media.Sound;
import flash.net.URLRequest;

import tests.BaseTest;

public class SoundTest extends BaseTest
{
	public function SoundTest()
	{
		name = "SoundTest";
	}
	
	//[Embed(source="/assets/sounds/hit.mp3")]
	//public static const SOUND_HIT:Class;

	private var sound:Sound;
	
	public override function buildup():void
	{
		sound = new Sound(new URLRequest("/assets/sounds/hit.mp3"));
		sound.addEventListener(Event.COMPLETE, completeHandler);
	}
	
	protected function completeHandler(event:Event):void
	{
		stepHandler("buildup");
	}
	public override function run():void
	{
		sound.play();
		_hasPassed = true;
		stepHandler("run");
	}
	public override function teardown():void
	{
		sound = null;
		stepHandler("teardown");
	}
}
}