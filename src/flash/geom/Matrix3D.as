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

package flash.geom
{
public class Matrix3D
{
	public function Matrix3D(v:Vector.<Number> = null)
	{
		this.rawData = v;
	}
	
	public var rawData:Vector.<Number>;
	
	public function copyRawDataFrom(vector:Vector.<Number>, index:uint = 0, transpose:Boolean = false):void
	{
		if (!rawData)
			rawData = new Vector.<Number>();
		for (var i:int = 0; i < vector.length; i++)
			//if (rawData.length < i + index)
				rawData[i+index] = vector[i];
	}
}
}