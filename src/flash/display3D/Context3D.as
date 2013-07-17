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

package flash.display3D
{
import flash.display3D.textures.Texture;
import flash.display3D.textures.TextureBase;
import flash.events.EventDispatcher;
import flash.events.IEventDispatcher;
import flash.geom.Matrix3D;
import flash.geom.Rectangle;

import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.html.canvas.WebGLRenderingContext;

import renaun.html.stub.ArrayBuffer;
import renaun.html.stub.Float32Array;

public class Context3D extends EventDispatcher
{
	public function Context3D()
	{
		super();
	}
	
	// WebGL Specifics:
	public var canvas:HTMLCanvasElement;
	public var lastProgram:Program3D;
	public var lastVertexBuffer:VertexBuffer3D;
	public var webglContext:WebGLRenderingContext;
	public var projectionMatrix:Object;
	public var enableErrorChecking:Boolean = false;
	
	public function get driverInfo():String
	{
		return "WebGL Port In Progress"; // Hook into WebGL Driver Info
	}
	
	public function clear(red:Number = 0.0, green:Number = 0.0, blue:Number = 0.0, alpha:Number = 1.0, depth:Number = 1.0, stencil:uint = 0, mask:uint = 0xffffffff):void
	{
		//trace("Context3D.CLEAR: clearColor/clear: mask: " + mask + " rgba: " + red + "/" + green + "/" + blue + "/"+ alpha);
		// TODO not sure if all these are needed
		webglContext.clearColor(red, green, blue, alpha);
		webglContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
		
		//webglContext.clearDepth(depth);
		//webglContext.clearStencil(stencil);
	}
	
	public function configureBackBuffer(width:int, height:int, antiAlias:int, enableDepthAndStencil:Boolean = true, wantsBestResolution:Boolean = false):void
	{
		trace("Context3D CHANGE BACK BUFFER (OR VIEWPORT?) w/h: " + width +"/"+height);
		webglContext.disable(WebGLRenderingContext.DEPTH_TEST);
		webglContext.disable(WebGLRenderingContext.CULL_FACE);
		webglContext.enable(WebGLRenderingContext.BLEND);
		webglContext.colorMask(true, true, true, false);
			/*
			gl.disable(gl.DEPTH_TEST);
		gl.disable(gl.CULL_FACE);
		gl.enable(gl.BLEND);
		gl.colorMask(true, true, true, false); 
			*/
		this.canvas.width = width;
		this.canvas.height = height;
		webglContext.viewport(0, 0, width, height);	
	}
	
	public function createIndexBuffer(numIndices:int):IndexBuffer3D
	{
		var indexBuffer:IndexBuffer3D = new IndexBuffer3D();
		indexBuffer.context3D = this;
		indexBuffer.buffer = webglContext.createBuffer();
		webglContext.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
		return indexBuffer;
	}
	
	public function createProgram():Program3D
	{
		if (lastProgram)
			return lastProgram;
		var program:Program3D = new Program3D();
		program.context3D = this;
		lastProgram = program;
		return program;
	}
	
	public function createTexture(width:int, height:int, format:String, optimizeForRenderToTexture:Boolean, streamingLevels:int = 0):Texture
	{
		var texture:Texture = new Texture();
		texture.context3D = this;
		return texture;
	}
	
	public function createVertexBuffer(numVertices:int, data32PerVertex:int):VertexBuffer3D
	{
		var vertexBuffer:VertexBuffer3D = new VertexBuffer3D();
		vertexBuffer.context3D = this;
		vertexBuffer.buffer = webglContext.createBuffer();
		vertexBuffer.elementsPerVertex = data32PerVertex;
		webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, vertexBuffer.buffer);
		return vertexBuffer;
	}
	
	public function dispose():void
	{
		// TODO keep list of all programs, and buffers to dispose correctly
	}
	
	public function drawTriangles(indexBuffer:IndexBuffer3D, firstIndex:int = 0, numTriangles:int = -1):void
	{
		trace("Context3D::drawTriangles: indexBuffer: " + indexBuffer.buffer + " - " + firstIndex + " - " + numTriangles);
		webglContext.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
		// 3 is because 1 triangle has 3 vertices and WebGL is element based (or one vertex is an element?)
		webglContext.drawElements(WebGLRenderingContext.TRIANGLES, numTriangles * 3, WebGLRenderingContext.UNSIGNED_SHORT, 0);
	}
	
	public function present():void
	{
		//trace("Context3D.present");
		webglContext.colorMask(true, true, true, false); 
		//webglContext.viewport(0, 0, this.width, this.height);	
		
		webglContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	}
	
	public function setBlendFactors(sourceFactor:String, destinationFactor:String):void
	{
		trace("Context3D::setBlendFactors NOT SETTING HARD CODED");
		webglContext.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
		
	}
	
	public function setCulling(triangleFaceToCull:String):void
	{
		
	}
	
	public function setDepthTest(depthMask:Boolean, passCompareMode:String):void
	{
		if (!depthMask)
			webglContext.disable(WebGLRenderingContext.DEPTH_TEST);
	}
	
	public function setProgram(program:Program3D):void
	{
		trace("Context3D::setProgram: program: " + program);
		// Probably gl.useProgram
		// NOT SURE IT NEEDS TO BE RESET  webglContext.useProgram(program.shaderProgram);
		this.lastProgram = program;
	}
	
	public function setProgramConstantsFromMatrix(programType:String, firstRegister:int, matrix:Matrix3D, transposedMatrix:Boolean = false):void
	{
		// THIS IS STARLING SPECIFIC
		var projectionMatrix:ArrayBuffer = new ArrayBuffer(16*4);
		var resultMatrix:Float32Array = new Float32Array(projectionMatrix);
		var data:Vector.<Number> = matrix.rawData;
		var i:int = 0;
		if (!transposedMatrix)
		{
			for (i; i < 4; i++) {
				resultMatrix[(i*4)] = data[i];
				resultMatrix[(i*4)+1] = data[i+4];
				resultMatrix[(i*4)+2] = data[i+8];
				resultMatrix[(i*4)+3] = data[i+12];
			}  
		}
		else
		{
			for (i; i < 16; i++) {
				resultMatrix[i] = data[i];
			}   
		}
		this.webglContext.uniformMatrix4fv(this.lastProgram.mvMatrixUniform, false, resultMatrix);
	}
	
	public function setProgramConstantsFromVector(programType:String, firstRegister:int, data:Vector.<Number>, numRegisters:int = -1):void
	{
		// Is this the enanbleVertexAttribArray?
	}
	
	public function setRenderToBackBuffer():void
	{
		
	}
	
	public function setRenderToTexture(texture:TextureBase, enableDepthAndStencil:Boolean = false, antiAlias:int = 0, surfaceSelector:int = 0):void
	{
		
	}
	
	public function setScissorRectangle(rectangle:Rectangle):void
	{
		
	}
	
	public function setTextureAt(sampler:int, texture:TextureBase):void
	{
		if (!texture)
			return;
		this.webglContext.activeTexture(WebGLRenderingContext.TEXTURE0);
		this.webglContext.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture._webglTexture);
	}
	
	public function setVertexBufferAt(index:int, buffer:VertexBuffer3D, bufferOffset:int = 0, format:String = "float4"):void
	{
		if (!buffer)
			return;
		var size:int = (format == "float2") ? 2 : 4; 
		
		// The "index" parameter is known by the developer to be the ordering it wants. But the actual ordering can be different.
		// We need a way that is tied to the program to know the correct ordering
		
		//this.webglContext.bufferSubData(WebGLRenderingContext.ARRAY_BUFFER, 0, buffer.buffer);
		// TODO: This assumes FLOAT and not other types like BYTE
		try
		{
			index = lastProgram.registerOrdering[index];
		}
		catch (error:Error)
		{
			trace("Context3D::setVertexBufferAt: [Program's register remapping failure] " + index);
		}
		
		if (lastVertexBuffer !== buffer)
		{
			buffer.uploadLast();
		}
		this.webglContext.vertexAttribPointer(index, size, WebGLRenderingContext.FLOAT, false, buffer.elementsPerVertex * 4, bufferOffset * 4);
	}
}
}