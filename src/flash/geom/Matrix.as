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
	import flash.utils.FlashTimingEngine;

public class Matrix
{
	public function Matrix(a:Number = 1, b:Number = 0, c:Number = 0, d:Number = 1, tx:Number = 0, ty:Number = 0)
	{
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	
	public var a:Number;
	public var b:Number;
	public var c:Number;
	public var d:Number;
	public var tx:Number;
	public var ty:Number;
	
	public function identity():void { 
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0
		this.ty = 0;
	}
	
	public function setTo(aa:Number, ba:Number, ca:Number, da:Number, txa:Number, tya:Number):void
	{
		this.a = aa;
		this.b = ba;
		this.c = ca;
		this.d = da;
		this.tx = txa;
		this.ty = tya;
	}
	
	public function concat(m:Matrix):void 
	{
		var aT:Number = this.a;
		var cT:Number = this.c;
		var txT:Number = this.tx;
		this.a = aT * m.a + this.b * m.c;
		this.b = aT * m.b + this.b * m.d;
		this.c = cT * m.a + this.d * m.c;
		this.d = cT * m.b + this.d * m.d;
		
		this.tx = txT * m.a + this.ty * m.c + m.tx;
		this.ty = txT * m.b + this.ty * m.d + m.ty;
	}
	public function copyFrom(sourceMatrix:Matrix):void 
	{
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	
	public function invert():void {
//trace("$$$$ API NOT COMPLETE: Matrix.invert() $$$$");	
		var b01:Number = d;
		var b11:Number = -1 * c;
		var b21:Number = ty * c - d * tx;
		var det:Number = a * b01 + b * b11;
		det = 1.0 / det;
		
		a = b01 * det;
		b = (-1 * b) * det;
		c = b11 * det;
		d = (1 * a) * det;
		tx = b21 * det;
		ty = (-ty * a + b * tx) * det;
		
/*
mat3.invert = function(out, a) {
var a00 = a[0], a01 = a[1], a02 = a[2],
a10 = a[3], a11 = a[4], a12 = a[5],
a20 = a[6], a21 = a[7], a22 = a[8],

b01 = a22 * a11 - a12 * a21,
b11 = -a22 * a10 + a12 * a20,
b21 = a21 * a10 - a11 * a20,

// Calculate the determinant
det = a00 * b01 + a01 * b11 + a02 * b21;

if (!det) { 
return null; 
}
det = 1.0 / det;

out[0] = b01 * det;
out[1] = (-a22 * a01 + a02 * a21) * det;
out[2] = (a12 * a01 - a02 * a11) * det;
out[3] = b11 * det;
out[4] = (a22 * a00 - a02 * a20) * det;
out[5] = (-a12 * a00 + a02 * a10) * det;
out[6] = b21 * det;
out[7] = (-a21 * a00 + a01 * a20) * det;
out[8] = (a11 * a00 - a01 * a10) * det;
return out;
};
*/
	}
	public function rotate(angle:Number):void {
		var s:Number = Math.sin(angle);
		var c:Number = Math.cos(angle);
		
		var m:Matrix = new Matrix(c, s, -s, c, 0, 0);
		concat(m);
	}
	
	public function scale(sx:Number, sy:Number):void {
		var m:Matrix = new Matrix(sx, 0, 0, sy, 0, 0);
		concat(m);
	}
	public function translate(dx:Number, dy:Number):void {
		this.tx = dx;//dx * a + dy * b + this.tx;
		this.ty = dy;//dx * b + dy * d + this.ty;
	}
	public function createGradientBox(width:Number, height:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void {
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Matrix.createGradientBox() $$$$");
	}
}
}