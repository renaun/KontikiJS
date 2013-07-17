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
public class ProgressEvent extends Event
{
	public static const PROGRESS:String = "progress";
	
	public static const SOCKET_DATA : String = "socketData";
	
	public function ProgressEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, bytesLoaded:Number = 0, bytesTotal:Number = 0)
	{
		super(type, bubbles, cancelable);
		this.bytesLoaded = bytesLoaded;
		this.bytesTotal = bytesTotal;
	}
	
	public var bytesLoaded:* = 0;
	public var bytesTotal:* = 0;
}
}