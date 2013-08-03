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
public class Capabilities
{
	public function Capabilities()
	{
		
	}
	
	public static var version:String = "1.0.0";
	public static var os:String = "mockapi";
	public static var screenDPI:Number = 1;
	public static var screenResolutionX:Number = 100;
	public static var screenResolutionY:Number = 100;
	public static var isDebugger:Boolean = false;
	public static var playerType:String = "js";
	public static var manufacturer:String = "Unknown OS";
}
}