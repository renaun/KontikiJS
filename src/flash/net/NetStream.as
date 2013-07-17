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

package flash.net
{
import flash.events.EventDispatcher;
import flash.events.IEventDispatcher;
import flash.media.SoundTransform;

public class NetStream extends EventDispatcher
{
	public function NetStream(target:IEventDispatcher=null)
	{
		super(target);
	}
	
	public var time:Number = 0;
	public var bytesLoaded:uint = 0;
	public var bytesTotal:uint = 0;
	public var inBufferSeek:Boolean = false;
	public var soundTransform:SoundTransform = new SoundTransform();
	
	public var client:Object;
	
	public function attach(connection:NetConnection):void
	{
		
	}
	
	public function play(... args):void
	{
		
	}
	
	public function seek(offset:Number):void {}
	
	public function close():void {}
}
}