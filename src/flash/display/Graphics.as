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
import flash.display.cmds.SetAttribCmd;
import flash.display.cmds.SetBitmapAttribCmd;
import flash.display.cmds.SetColorAttribCmd;
import flash.display.cmds.Cmd;
import flash.geom.Matrix;
import flash.utils.FlashTimingEngine;

import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.html.canvas.CanvasRenderingContext2D;
import randori.webkit.page.Window;

import renaun.html.stub.JSImage;

public final class Graphics
{
	private var filling:Boolean;
	private var fillingBmdCmd:SetBitmapAttribCmd;
	private var lineing:Boolean;
    private var cmds: Array = [];
	public var sprite:DisplayObject;
	public function Graphics()
	{
	}
	
	// WebGL / HTML Specific
	public var canvas:HTMLCanvasElement;
	
	public function getCanvas():CanvasRenderingContext2D
	{
		if (!canvas)
		{
			// TODO opitmize resizing canvas based on drawing?
			//canvas = Window.document.createElement("canvas") as HTMLCanvasElement;
			//canvas.width = 600;
			//canvas.height = 600;
			//Window.document.body.appendChild(canvas as HTMLCanvasElement);
			canvas = Window.document.getElementById("stage") as HTMLCanvasElement;
		}
		return canvas.getContext("2d");
	}
	
	public function beginFill(color:uint, alpha:Number = 1.0):void 
	{
		this.cmds.push(
			new SetColorAttribCmd(getCanvas(),"fillStyle", color,alpha,this.sprite),
			new Cmd(getCanvas().beginPath, null),
			new SetAttribCmd(this,"filling", true),
			new SetAttribCmd(this,"fillingBmdCmd", null)
		);
	}
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Boolean = true, smooth:Boolean = false):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginBitmapFill() $$$$");
	}
	public function beginGradientFill(type:String, colors:Array, alphas:Array, ratios:Array, matrix:* = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginGradientFill() $$$$");
	}
	public function clear():void 
	{
		this.filling=false;
		this.lineing=false;
		this.cmds=[];
	}
	public function drawCircle(x:Number, y:Number, radius:Number):void 
	{
		 this.cmds.push(
            new Cmd(getCanvas().beginPath,null),
            new Cmd(getCanvas().arc, [x, y, radius, 0, Math.PI * 2]),
            new Cmd(getCanvas().closePath, null),
            new Cmd(getCanvas().fill, null)
        );
	}
	public function drawRect(x:Number, y:Number, width:Number, height:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRect() $$$$");
	}
	public function drawRoundRect(x:Number, y:Number, width:Number, height:Number, ellipseWidth:Number, ellipseHeight:Number = NaN):void 
	{
		/*if (isNaN(ellipseHeight))
			ellipseHeight = ellipseWidth;
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.beginPath();
		ctx.moveTo(x + ellipseWidth, y);
		ctx.lineTo(x + width - ellipseWidth, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + ellipseHeight);
		ctx.lineTo(x + width, y + height - ellipseHeight);
		ctx.quadraticCurveTo(x + width, y + height, x + width - ellipseWidth, y + height);
		ctx.lineTo(x + ellipseWidth, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - ellipseHeight);
		ctx.lineTo(x, y + ellipseHeight);
		ctx.quadraticCurveTo(x, y, x + ellipseWidth, y);
		ctx.closePath();
		if (hasStrokeStlye) ctx.stroke();*/
	}
	public function drawGraphicsData(graphicsData:Vector.<IGraphicsData>):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawGraphicsData() $$$$");
	}
	public function endFill():void 
	{
		this.cmds.push(
            new Cmd(getCanvas().closePath, null),
			new SetAttribCmd(this,"filling", false)
        )
        if(this.filling){
			this.cmds.push(new Cmd(getCanvas().fill, null));
		}
	}
	public function lineStyle(thickness:Number = NaN, color:uint = 0, alpha:Number = 1.0, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = null, joints:String = null, miterLimit:Number = 3):void
	{
		if(this.lineing)this.cmds.push(new Cmd(getCanvas().stroke,null));
        this.cmds.push(
            new SetAttribCmd(getCanvas(),"lineWidth", thickness),
            new SetColorAttribCmd(getCanvas(),"strokeStyle", color,alpha,this.sprite),
			new SetAttribCmd(this,"lineing", !isNaN(thickness))
        );
	}
	public function lineGradientStyle(type:String, colors:Array, alphas:Array, ratios:Array, matrix:Matrix = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineGradientStyle() $$$$");
	}
	public function lineTo(x:Number, y:Number):void 
	{
		this.cmds.push(
            new Cmd(getCanvas().lineTo, [x, y])
        );
	}
	public function moveTo(x:Number, y:Number):void 
	{
		this.cmds.push(
            new Cmd(getCanvas().moveTo, [x, y])
            );
		
	}
	public function drawEllipse(x:Number, y:Number, width:Number, height:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawEllipse() $$$$");
	}
	public function copyFrom(g:Graphics):void 
	{
		this.cmds = g.cmds.concat();  
	}
	public function curveTo(controlX:Number, controlY:Number, anchorX:Number, anchorY:Number): void {
        this.cmds.push(
            new Cmd(getCanvas().quadraticCurveTo, [controlX,controlY, anchorX,anchorY])
        );
    }
	public function cubicCurveTo(controlX1: Number, controlY1: Number, controlX2: Number, controlY2: Number, anchorX: Number, anchorY: Number): void {
        this.cmds.push(
            new Cmd(getCanvas().bezierCurveTo, [controlX1, controlY1,controlX2,controlY2,anchorX,anchorY])
        );
    }
	
	public function updateGraphics():void {
		var m:Matrix = sprite.transform.worldMatrix;
		getCanvas().setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);
       
		this.lineing=false;
		this.filling=false;
		if(!this.filling)
		getCanvas().beginPath();
        for each(var cmd:Cmd in this.cmds) {
            cmd.update();
        }
		getCanvas().closePath();
        if(this.filling){
			if(this.fillingBmdCmd!=null&&this.fillingBmdCmd.matrix!=null){
				/*var m=this.fillingBmdCmd.worldMatrix;
				m.copy(this.fillingBmdCmd.sprite.worldMatrix);
				m.append(this.fillingBmdCmd.matrix);
				Graphics.ctx.setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);
				Graphics.ctx.fill();
				m=this.fillingBmdCmd.sprite.worldMatrix;
				Graphics.ctx.setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);*/
			}else{
				getCanvas().fill();
			}
		}
        if(this.lineing)getCanvas().stroke();
	}
}
}
