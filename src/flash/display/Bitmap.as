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
	
import flash.geom.Matrix;
public dynamic class Bitmap extends DisplayObject
{
	public function Bitmap(bitmapData:BitmapData = null, pixelSnapping:String = "auto", smoothing:Boolean = false)
	{
		this.bitmapData = bitmapData;
		super();
	}
	
	public var smoothing:Boolean = false;
	public var pixelsnapping:String = "";
	public var blendMode:String = "";
	
	public var bitmapData:BitmapData;
	
	private var _g:Graphics;
	override public function updateGraphics():void {
		super.updateGraphics();
		if (bitmapData) {
			g.updateGraphics();
		}
	}
	private function get g():Graphics 
	{
		if (_g==null) {
			_g = new Graphics;
			_g.sprite = this;
			_g.beginBitmapFill(bitmapData, null, false, smoothing);
			_g.drawRect(0, 0, bitmapData.width, bitmapData.height);
		}
		return _g;
	}
}
}