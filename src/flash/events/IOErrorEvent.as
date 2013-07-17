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

package flash.events
{
public class IOErrorEvent extends Event
{
	public static const IO_ERROR : String = "ioError";
	public static const NETWORK_ERROR : String = "networkError";
	
	public function IOErrorEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "", id:int = 0)
	{
		super(type, bubbles, cancelable);
		this.text = text;
		_errorID = id;
	}
	
	public var text:String = "";
	
	protected var _errorID:int;
	public function get errorID():int
	{
		return _errorID;
	}
}
}