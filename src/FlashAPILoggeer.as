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

package
{
//import avmplus.System;

public class FlashAPILoggeer
{
	public static var logger:Function;
	
	public static function log(msg:String):void
	{
		trace(getTimestamp() + "[FAPI]" + msg+"");
		if (logger)
			logger(getTimestamp() + "[FAPI]" + msg+"");
		//System.stdout.write( getTimestamp() + "[FAPI]" + msg+"\n");
	}
	
	private static function getTimestamp():String
	{
		var date:Date = new Date();
		var hours:Number = date.getHours();
		var minutes:Number = date.getMinutes();
		var seconds:Number = date.getSeconds();
		var millis:Number = date.getMilliseconds();
		
		return "[" + (hours<10?"0":"") + hours + ":" + (minutes<10?"0":"") + minutes + ":" + (seconds<10?"0":"") + seconds + "." + (millis<10?"00":(millis<100?"0":"")) + millis + "] ";
	}
}
}