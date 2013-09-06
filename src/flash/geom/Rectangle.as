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
public class Rectangle
{
	public function Rectangle(x:Number = 0, y:Number = 0, width:Number = 0, height:Number = 0)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	public var x:Number = 0;
	public var y:Number = 0;
	public var width:Number = 0;
	public var height:Number = 0;



	public function clone():Rectangle
	{
		return new Rectangle(x, y, width, height);
	}
	
	public function copyFrom(sourceRect:Rectangle):void
	{
		x = sourceRect.x;
		y = sourceRect.y;
		width = sourceRect.width;
		height = sourceRect.height;
	}
	
	public function union(toUnion:Rectangle):Rectangle
	{
		if (toUnion.width == 0 || toUnion.height == 0)
			return this;
		var leftX:Number = Math.min(this.x, toUnion.x);
		var leftY:Number = Math.min(this.y, toUnion.y);
		var newW:Number = Math.max(this.x+this.width, toUnion.x+toUnion.width) - leftX;
		var newH:Number = Math.max(this.y+this.height, toUnion.y+toUnion.height) - leftY;
		return new Rectangle(leftX, leftY, newW, newH);
	}
	
	public function inflate(dx:Number, dy:Number):void
	{
		x -= dx;
		width += 2 * dx;
		
		y -= dy;
		height += 2 * dy;
	}
	public function get left():Number
	{
		return x;
	}
	
	public function set left(value:Number):void
	{
		x = value;
	}
	public function get top():Number
	{
		return y;
	}
	
	public function set top(value:Number):void
	{
		y = value;
	}
	private var _right:Number;
	
	public function get right():Number
	{
		return x+width;
	}
	
	public function set right(value:Number):void
	{
		width = value - x;
	}
	private var _bottom:Number;
	
	public function get bottom():Number
	{
		return y+height;
	}
	
	public function set bottom(value:Number):void
	{
		height = value - y;
	}
	private var topLeftPoint:Point = new Point();
	public function get topLeft():Point
	{
		topLeftPoint.x = x;
		topLeftPoint.y = y;
		return topLeftPoint;
	}
	public function set topLeft(value:Point):void
	{
		x = value.x;
		y = value.y;
	}
	
	public function contains(cx:Number, cy:Number):Boolean
	{
		return (cx >= x && cx <= right 
			&& cy >= y && cy <= bottom);
	}
	
	public function containsPoint(point:Point):Boolean
	{
		return contains(point.x, point.y);
	}
	
	private var sizePoint:Point = new Point();
	public function get size():Point
	{
		sizePoint.x = width;
		sizePoint.y = height;
		return sizePoint;
	}
	public function set size(value:Point):void
	{
		width = value.x;
		height = value.y;
	}
	
	public function offset(dx:Number, dy:Number):void
	{
		x += dx;
		y += dy;
	}
	
	public function intersects(toIntersect:Rectangle):Boolean
	{
		return !(toIntersect.left > right || 
			toIntersect.right < left || 
			toIntersect.top > bottom ||
			toIntersect.bottom < top);
	}
	
	public function intersection(toIntersect:Rectangle):Rectangle
	{
		var rect:Rectangle = new Rectangle();	
		if (this.intersects(toIntersect))
		{
			if (toIntersect.left <= this.right)
			{
				rect.x = toIntersect.left;
				rect.width = this.right - rect.x;
			}   
			else
			{
				rect.x = this.left;
				rect.width = toIntersect.right - rect.x;
			}
			rect.y = (toIntersect.top < this.top) ? this.top : toIntersect.top;
			rect.height = (toIntersect.bottom < this.bottom) ? toIntersect.bottom : this.bottom;
			rect.height = rect.height - rect.y;
		}
		return rect;
	}
	
	public function isEmpty():Boolean
	{
		return width <= 0 || height <= 0;
	}
	
	public function setEmpty():void
	{
		x = 0;
		y = 0;
		width = 0;
		height = 0;
	}
	
	public function setTo(xa:Number, ya:Number, widtha:Number, heighta:Number):void
	{
		x = xa;
		y = ya;
		width = widtha;
		height = heighta;
	}
}
}