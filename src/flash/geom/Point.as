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
public class Point
{
	
	public static function interpolate(pt1:Point, pt2:Point, f:Number):Point
	{
		var xDis:Number = (pt2.x - pt1.x);
		var yDis:Number = (pt2.y - pt1.y);
		return new Point(pt1.x + (xDis  * f), pt1.y + (xDis * f));
	}
		
	public static function distance(pt1:Point, pt2:Point):Number 
	{
		var a:int = pt1.x - pt2.x;
		var b:int = pt1.y - pt2.y;
		return Math.sqrt(a*a + b*b);
	}
	public function Point(x:Number = 0, y:Number = 0)
	{
		this.x = x;
		this.y = y;
	}
	
	public var x:Number = 0;
	public var y:Number = 0;
	
	public function clone():Point { return new Point(x, y); }
	public function normalize(thickness:Number):void {}
	
	public function get length():Number
	{
		return Math.sqrt(x * x + y * y);
	}
	
	public function add(v:Point):Point
	{
		return new Point(x + v.x, y + v.y);
	}
	
	public function subtract(v:Point):Point
	{
		return new Point(x - v.x, y - v.y);
	}
	
	public function equals(toCompare:Point):Boolean { return (x == toCompare.x && y == toCompare.y); }
	
	public function toString():String { return "Point"; }
	
	public function setTo(xa:Number, ya:Number):void
	{
		x = xa;
		y = ya;
	}
}
}