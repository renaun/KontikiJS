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

package flash.display
{
public class GraphicsPath implements IGraphicsData
{
	public function GraphicsPath(commands:Vector.<int> = null, data:Vector.<Number> = null, winding:String = "evenOdd")
	{
	}
	
	public var commands:Vector.<int> = new Vector.<int>();
	public var data:Vector.<Number> = new Vector.<Number>();
}
}