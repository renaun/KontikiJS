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

package flash.system
{
public dynamic class System
{
	public static var 	freeMemory : Number = 0;
	
	public static var 	privateMemory : Number = 0;
	
	public static var 	totalMemory : Number = 0;
	
	public static function setClipboard(message:String):void {}
	public static function gc():void {}
	public static function disposeXML(node:XML):void {}
	public static function pauseForGCIfCollectionImminent(imminence:Number = 0.75):void {}
	public function System()
	{
	}
}
}