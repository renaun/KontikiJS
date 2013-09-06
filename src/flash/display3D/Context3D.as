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
import flash.display.BitmapData;
import flash.display3D.textures.Texture;
import flash.display3D.textures.TextureBase;
import flash.events.EventDispatcher;
import flash.geom.Matrix3D;
import flash.geom.Rectangle;

import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.html.canvas.WebGLRenderingContext;
import randori.webkit.html.canvas.WebGLUniformLocation;

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
	public var currentProgram:Program3D;
	public var lastVertexBuffer:VertexBuffer3D;
	public var webglContext:WebGLRenderingContext;
	public var projectionMatrix:Object;
	public var enableErrorChecking:Boolean = false;
	
	protected var isDrawing:Boolean = false;
	protected var hasBlendFactors:Boolean = false;
	private var blendSourceFactor:Object;
	private var blendDestinationFactor:Object;
	private var textureList:Vector.<TextureBase> = new Vector.<TextureBase>();
	private var indexBufferList:Vector.<IndexBuffer3D> = new Vector.<IndexBuffer3D>();
	private var vertexBufferList:Vector.<VertexBuffer3D> = new Vector.<VertexBuffer3D>();
	private var programList:Vector.<Program3D> = new Vector.<Program3D>();

	
	public function get driverInfo():String
	{
		return "WebGL Port In Progress"; // Hook into WebGL Driver Info
	}
	
	public function clear(red:Number = 0.0, green:Number = 0.0, blue:Number = 0.0, alpha:Number = 1.0, depth:Number = 1.0, stencil:uint = 0, mask:uint = 0xffffff):void
	{
		if (mask == 0xffffff)
			mask = Context3DClearMask.ALL;
		if (!isDrawing)
		{
			updateBlendStatus();
			isDrawing = true;
		}
		//trace("Context3D.CLEAR: clearColor/clear: mask: " + mask + " rgba: " + red + "/" + green + "/" + blue + "/"+ alpha);
		
		webglContext.clearColor(red, green, blue, alpha);
		webglContext.clearDepth(depth);
		webglContext.clearStencil(stencil);
		webglContext.clear(mask); // WebGLRenderingContext.COLOR_BUFFER_BIT
	}
	
	private function updateBlendStatus():void
	{
		if (hasBlendFactors) 
		{
			webglContext.enable( WebGLRenderingContext.BLEND );
			webglContext.blendEquation( WebGLRenderingContext.FUNC_ADD );
			webglContext.blendFunc( blendSourceFactor, blendDestinationFactor );
		}
		else
		{
			webglContext.disable( WebGLRenderingContext.BLEND );
		}
	}
	
	public function configureBackBuffer(width:int, height:int, antiAlias:int, enableDepthAndStencil:Boolean = true, wantsBestResolution:Boolean = false):void
	{
		trace("Context3D CHANGE BACK BUFFER (OR VIEWPORT?) w/h: " + width +"/"+height);
		/*
		webglContext.disable(WebGLRenderingContext.DEPTH_TEST);
		webglContext.disable(WebGLRenderingContext.CULL_FACE);
		webglContext.enable(WebGLRenderingContext.BLEND);
		webglContext.colorMask(true, true, true, false);
		*/
			/*
			gl.disable(gl.DEPTH_TEST);
		gl.disable(gl.CULL_FACE);
		gl.enable(gl.BLEND);
		gl.colorMask(true, true, true, false); 
			*/
		if (enableDepthAndStencil)
		{
			webglContext.enable(WebGLRenderingContext.STENCIL_TEST);
			webglContext.enable(WebGLRenderingContext.DEPTH_TEST);
		}
		this.canvas.width = width;
		this.canvas.height = height;
		webglContext.viewport(0, 0, width, height);	
	}
	/*
	TODO implement
	public function createCubeTexture(size:int, format:String, optimizeForRenderToTexture:Boolean, streamingLevels:int = 0):flash.display3D.textures:CubeTexture
	{
		var texture:CubeTexture = new CubeTexture(webglContext, size);
		textureList.push(texture);
		return texture;
	}
	*/
	
	public function createIndexBuffer(numIndices:int):IndexBuffer3D
	{
		var indexBuffer:IndexBuffer3D = new IndexBuffer3D(this, numIndices);
		indexBufferList.push(indexBuffer);
		//webglContext.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
		return indexBuffer;
	}
	
	public function createProgram():Program3D
	{
		var program:Program3D = new Program3D(this);
		programList.push(program);
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
		var vertexBuffer:VertexBuffer3D = new VertexBuffer3D(this, numVertices, data32PerVertex);
		webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, vertexBuffer.buffer);
		return vertexBuffer;
	}
	
	public function dispose():void
	{
		var i:int;
		for (i = 0; i < indexBufferList.length; ++i)
		{
			indexBufferList[i].dispose();
		}
		indexBufferList = null;
		
		for (i = 0; i < vertexBufferList.length; ++i)
		{
			vertexBufferList[i].dispose();
		}
		vertexBufferList = null;
		
		for (i = 0; i < textureList.length; ++i)
		{
			textureList[i].dispose();
		}
		textureList = null;
		
		for (i = 0; i < programList.length; ++i)
		{
			programList[i].dispose();
		}
		programList = null;
	}
	
	public function drawTriangles(indexBuffer:IndexBuffer3D, firstIndex:int = 0, numTriangles:int = -1):void
	{
		if (!isDrawing)
			throw new Error("Need to clear before drawing if the buffer has not been cleared sinceu the last present() call");
		
		var numIndices:int = 0;
		if (numTriangles == -1)
			numIndices = indexBuffer.numIndices;
		else
			numIndices = numTriangles * 3;
		
		//trace("Context3D::drawTriangles: indexBuffer: " + indexBuffer.buffer + " - " + firstIndex + " - " + numTriangles);
		webglContext.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
		webglContext.drawElements(WebGLRenderingContext.TRIANGLES, numIndices, WebGLRenderingContext.UNSIGNED_SHORT, firstIndex);
	}
	
	public function present():void
	{
		isDrawing = false;
		webglContext.useProgram(null);
		//trace("Context3D.present");
		//webglContext.viewport(0, 0, this.width, this.height);	
		/* CHANGE 2013.08.02
		webglContext.colorMask(true, true, true, false); 
		webglContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
		*/
	}
	
	public function setBlendFactors(sourceFactor:String, destinationFactor:String):void
	{
		hasBlendFactors = true;
		trace("Context3D::setBlendFactors NOT SETTING HARD CODED");
		switch( sourceFactor )
		{
			case Context3DBlendFactor.ONE:
				blendSourceFactor = WebGLRenderingContext.ONE;
				break;
			case Context3DBlendFactor.DESTINATION_ALPHA:
				blendSourceFactor = WebGLRenderingContext.DST_ALPHA;
				break;
			case Context3DBlendFactor.DESTINATION_COLOR:
				blendSourceFactor = WebGLRenderingContext.DST_COLOR;
				break;
			case Context3DBlendFactor.ONE:
				blendSourceFactor = WebGLRenderingContext.ONE;
				break;
			case Context3DBlendFactor.ONE_MINUS_DESTINATION_ALPHA:
				blendSourceFactor = WebGLRenderingContext.ONE_MINUS_DST_ALPHA;
				break;
			case Context3DBlendFactor.ONE_MINUS_DESTINATION_COLOR:
				blendSourceFactor = WebGLRenderingContext.ONE_MINUS_DST_COLOR;
				break;
			case Context3DBlendFactor.ONE_MINUS_SOURCE_ALPHA:
				blendSourceFactor = WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
				break;
			case Context3DBlendFactor.ONE_MINUS_SOURCE_COLOR:
				blendSourceFactor = WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
				break;
			case Context3DBlendFactor.SOURCE_ALPHA:
				blendSourceFactor = WebGLRenderingContext.SRC_ALPHA;
				break;
			case Context3DBlendFactor.SOURCE_COLOR:
				blendSourceFactor = WebGLRenderingContext.SRC_COLOR;
				break;
			case Context3DBlendFactor.ZERO:
				blendSourceFactor = WebGLRenderingContext.ZERO;
				break;
			default:
				throw new Error("Unknown blend source factor"); // TODO error
				break;
		}
		
		switch( destinationFactor )
		{
			case Context3DBlendFactor.ONE:
				blendDestinationFactor = WebGLRenderingContext.ONE;
				break;
			case Context3DBlendFactor.DESTINATION_ALPHA:
				blendDestinationFactor = WebGLRenderingContext.DST_ALPHA;
				break;
			case Context3DBlendFactor.DESTINATION_COLOR:
				blendDestinationFactor = WebGLRenderingContext.DST_COLOR;
				break;
			case Context3DBlendFactor.ONE:
				blendDestinationFactor = WebGLRenderingContext.ONE;
				break;
			case Context3DBlendFactor.ONE_MINUS_DESTINATION_ALPHA:
				blendDestinationFactor = WebGLRenderingContext.ONE_MINUS_DST_ALPHA;
				break;
			case Context3DBlendFactor.ONE_MINUS_DESTINATION_COLOR:
				blendDestinationFactor = WebGLRenderingContext.ONE_MINUS_DST_COLOR;
				break;
			case Context3DBlendFactor.ONE_MINUS_SOURCE_ALPHA:
				blendDestinationFactor = WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
				break;
			case Context3DBlendFactor.ONE_MINUS_SOURCE_COLOR:
				blendDestinationFactor = WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
				break;
			case Context3DBlendFactor.SOURCE_ALPHA:
				blendDestinationFactor = WebGLRenderingContext.SRC_ALPHA;
				break;
			case Context3DBlendFactor.SOURCE_COLOR:
				blendDestinationFactor = WebGLRenderingContext.SRC_COLOR;
				break;
			case Context3DBlendFactor.ZERO:
				blendDestinationFactor = WebGLRenderingContext.ZERO;
				break;
			default:
				throw new Error("Unknown blend destination factor"); // TODO error
				break;
		}
		
		updateBlendStatus();
	}
	
	public function setColorMask(red:Boolean, green:Boolean, blue:Boolean, alpha:Boolean):void
	{
		webglContext.colorMask( red, green, blue, alpha );
	}
	
	public function setCulling(triangleFaceToCull:String):void
	{
		if (triangleFaceToCull == Context3DTriangleFace.NONE)
		{
			webglContext.disable( WebGLRenderingContext.CULL_FACE );
		}
		else
		{
			webglContext.enable( WebGLRenderingContext.CULL_FACE );
			switch( triangleFaceToCull )
			{
				case Context3DTriangleFace.FRONT:
					webglContext.cullFace( WebGLRenderingContext.FRONT );
					break
				case Context3DTriangleFace.BACK:
					webglContext.cullFace( WebGLRenderingContext.BACK );
					break;
				case Context3DTriangleFace.FRONT_AND_BACK:
					webglContext.cullFace( WebGLRenderingContext.FRONT_AND_BACK );
					break;
				default:
					throw new Error("Unknown Context3DTriangleFace type.");
			}
		}
	}
	
	public function setDepthTest(depthMask:Boolean, passCompareMode:String):void
	{
		switch( passCompareMode )
		{
			case Context3DCompareMode.ALWAYS:
				webglContext.depthFunc( WebGLRenderingContext.ALWAYS );
				break;
			case Context3DCompareMode.EQUAL:
				webglContext.depthFunc( WebGLRenderingContext.EQUAL );
				break;
			case Context3DCompareMode.GREATER:
				webglContext.depthFunc( WebGLRenderingContext.GREATER );
				break;
			case Context3DCompareMode.GREATER_EQUAL:
				webglContext.depthFunc( WebGLRenderingContext.GEQUAL );
				break;
			case Context3DCompareMode.LESS:
				webglContext.depthFunc( WebGLRenderingContext.LESS );
				break;
			case Context3DCompareMode.LESS_EQUAL:
				webglContext.depthFunc( WebGLRenderingContext.LEQUAL );
				break;
			case Context3DCompareMode.NEVER:
				webglContext.depthFunc( WebGLRenderingContext.NEVER );
				break;
			case Context3DCompareMode.NOT_EQUAL:
				webglContext.depthFunc( WebGLRenderingContext.NOTEQUAL );
				break;
			default:
				throw new Error("Unknown Context3DCompareMode type.");
				break;
		}
		webglContext.depthMask(depthMask);
		//if (!depthMask)
		//	webglContext.disable(WebGLRenderingContext.DEPTH_TEST);
	}
	
	public function setProgram(program:Program3D):void
	{
		trace("Context3D::setProgram: program: " + program);
		// NOT SURE IT NEEDS TO BE RESET  webglContext.useProgram(program.shaderProgram);
		currentProgram = program;
		program.focusProgram();
	}
	
	/**
	 *	Convience method for locating uniformlocation names 
	 */
	private function getUniformLocationNameFromAgalRegisterIndex(programType:String, firstRegister:int):String
	{
		switch( programType)
		{
			case Context3DProgramType.VERTEX:
				return "vc" + firstRegister;
				break;
			case Context3DProgramType.FRAGMENT:
				return "fc" + firstRegister;
				break;
			default:
				throw new Error("Program Type " + programType + " not supported");
		}
	}
	
	public function setProgramConstantsFromMatrix(programType:String, firstRegister:int, matrix:Matrix3D, transposedMatrix:Boolean = false):void
	{
		
		
		// THIS IS STARLING SPECIFIC
		/*
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
		*/
		var locationName:String = getUniformLocationNameFromAgalRegisterIndex(programType, firstRegister);
		var uniformLocation:WebGLUniformLocation = webglContext.getUniformLocation(currentProgram.shaderProgram, locationName);
		webglContext.uniformMatrix4fv(uniformLocation, !transposedMatrix, new Float32Array(matrix.rawData as ArrayBuffer));
	}
	
	public function setProgramConstantsFromVector(programType:String, firstRegister:int, data:Vector.<Number>, numRegisters:int = -1):void
	{
		var currentIndex:int = 0;
		var locationName:String = "";
		var uniformLocation:WebGLUniformLocation;
		for (var i:int = 0; i < numRegisters; ++i )
		{
			currentIndex = i * 4;
			locationName = getUniformLocationNameFromAgalRegisterIndex( programType, firstRegister + i );;
			
			uniformLocation = webglContext.getUniformLocation(currentProgram.shaderProgram, locationName);
			webglContext.uniform4f(uniformLocation, data[currentIndex], data[currentIndex+1], data[currentIndex+2], data[currentIndex+3]);
		}
	}
	
	public function setRenderToBackBuffer():void
	{
		
	}
	
	public function setRenderToTexture(texture:TextureBase, enableDepthAndStencil:Boolean = false, antiAlias:int = 0, surfaceSelector:int = 0):void
	{
		
	}
	
	public function setScissorRectangle(rectangle:Rectangle):void
	{
		if( !rectangle )
		{
			webglContext.disable( WebGLRenderingContext.SCISSOR_TEST );
			return;
		}
		
		webglContext.enable( WebGLRenderingContext.SCISSOR_TEST );
		webglContext.scissor( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
	}
	
	public function setTextureAt(sampler:int, texture:TextureBase):void
	{
		
		var locationName:String = "fs" + sampler;
		if (!texture)
		{
			webglContext.activeTexture(WebGLRenderingContext.TEXTURE0 + sampler);
			webglContext.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
			return;
		}
		
		var location:WebGLUniformLocation = webglContext.getUniformLocation( currentProgram.shaderProgram, locationName );
		
		switch( sampler )
		{
			case 0: 
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE0 );
				break;
			case 1:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE1 );
				break;
			case 2:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE2 );
				break;
			case 3:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE3 );
				break;
			case 4:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE4 );
				break;
			case 5:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE5 );
				break;
			case 6:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE6 );
				break;
			case 7:
				webglContext.activeTexture( WebGLRenderingContext.TEXTURE7 );
				break;
			default:
				throw new Error("Texture " + sampler + " is out of bounds.");
		}
		
		webglContext.bindTexture( WebGLRenderingContext.TEXTURE_2D, texture._webglTexture );
		webglContext.uniform1i( location, sampler );
		
		// TODO create something like setSamplerStateAt(.... 
		/*
		this._gl.texParameteri( this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE );
		this._gl.texParameteri( this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE );
		this._gl.texParameteri( this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR );
		this._gl.texParameteri( this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR );
		*/
	}
	
	public function setVertexBufferAt(index:int, buffer:VertexBuffer3D, bufferOffset:int = 0, format:String = "float4"):void
	{
		var locationName:String = "va" + index;
		var location:Object = webglContext.getAttribLocation(currentProgram.shaderProgram, locationName);
		if (!buffer)
		{
			if (location > -1)
				webglContext.disableVertexAttribArray(location);
			return;
		}
		
		webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer.buffer);
		
		var numBytes:int = 4;
		var dimension:int; 
		switch( format )
		{
			case Context3DVertexBufferFormat.BYTES_4:
				dimension = 4;		
				webglContext.enableVertexAttribArray(location);
				webglContext.vertexAttribPointer(location, dimension, WebGLRenderingContext.UNSIGNED_BYTE, true, buffer.data32PerVertex * numBytes, bufferOffset * numBytes);
				return;
				break;
			case Context3DVertexBufferFormat.FLOAT_1:
				dimension = 1;
				break;
			case Context3DVertexBufferFormat.FLOAT_2:
				dimension = 2;
				break;
			case Context3DVertexBufferFormat.FLOAT_3:
				dimension = 3;
				break;
			case Context3DVertexBufferFormat.FLOAT_4:
				dimension = 4;
				break;
			default:
				throw new Error("Buffer format " + format + " is not supported.");
		}
		webglContext.enableVertexAttribArray(location);
		webglContext.vertexAttribPointer(location, dimension, WebGLRenderingContext.FLOAT, false, buffer.data32PerVertex * numBytes, bufferOffset * numBytes);
	}
	
	public function drawToBitmapData(destination:BitmapData):void
	{
		throw new Error("API NOT IMPLEMENTED -- Context3D.drawToBitmapData");
	}
}
}