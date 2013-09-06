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

modified code from: https://github.com/away3d/away3d-core-ts/blob/master/src/away/utils/ByteArray.ts
*/

package flash.utils
{
	
import renaun.html.stub.ArrayBuffer;
import renaun.html.stub.Float32Array;
import renaun.html.stub.Float32Array3;
import renaun.html.stub.Float64Array;
import renaun.html.stub.Float64Array3;
import renaun.html.stub.Int16Array;
import renaun.html.stub.Int16Array3;
import renaun.html.stub.Int32Array;
import renaun.html.stub.Int32Array3;
import renaun.html.stub.Int8Array;
import renaun.html.stub.Uint16Array;
import renaun.html.stub.Uint16Array3;
import renaun.html.stub.Uint32Array;
import renaun.html.stub.Uint32Array3;
import renaun.html.stub.Uint8Array;
import renaun.html.stub.Uint8Array3;

public class ByteArray implements IDataInput, IDataOutput
{
	private static const RESIZE_FACTOR:Number = 2;
	
	public function ByteArray()
	{
		rawBytes = new ArrayBuffer(16);
		tempUnalignedBuffer = new ArrayBuffer(16);
		_bytesAvailable = 0;
		
		_endian = (new Int8Array((new Int16Array([1] as ArrayBuffer) as Object).buffer)[0] > 0) ? Endian.LITTLE_ENDIAN : Endian.BIG_ENDIAN;
	}
	
	// JS Stuff
	private var rawBytes:ArrayBuffer;
	private var tempUnalignedBuffer:ArrayBuffer;
	
	// Randori Compiler Specific for Array Assessor []
	public function setValueByPosition(index:int, value:int):void
	{
		var oldPosition:int = position;
		position = index;
		writeByte(value);
		position = oldPosition;
	}
	
	public function getValueByPosition(index:int):int
	{
		var oldPosition:int = position;
		position = index;
		var ret:int = readByte();
		position = oldPosition;
		return ret;
	}
	
	private var _bytesAvailable:uint = 0;
	public function get bytesAvailable():uint
	{
		return _bytesAvailable;
	}
	public function get length():uint
	{
		return rawBytes.byteLength;
	}
	public function set length(value:uint):void
	{
		// TODO if its zero delete the buffer contents, 
		if (rawBytes.byteLength < value)
		{
			checkAndResizeBuffer(0, value, false);
		}
		else if (value == 0)
			clear();
	}
	public var position:uint = 0;
	public var shareable:Boolean = false;
	
	public function getArrayBuffer():ArrayBuffer
	{
		return rawBytes;
	}
	
	public function clear():void
	{
		rawBytes = new ArrayBuffer(16);
		_bytesAvailable = 0;
		position = 0;
	}
	
	private function checkAndResizeBuffer(neededSpace:int, specificLength:int = -1, positionCheck:Boolean = true):void
	{
		if ((positionCheck && position + neededSpace <= rawBytes.byteLength)
			||
				(specificLength == -1 && specificLength > rawBytes.byteLength))
			return;
		
		var neededLength:int = (position + neededSpace >= rawBytes.byteLength * RESIZE_FACTOR) ? position + neededSpace : rawBytes.byteLength * RESIZE_FACTOR;
		var newLength:int = (specificLength == -1) ?  neededLength : specificLength; 
		if (newLength == 0)
			newLength = 128;// default is 128 bytes	
				
		var newBuffer:ArrayBuffer = new ArrayBuffer(newLength);                              
		var view:Uint8Array3 = new Uint8Array3(rawBytes, 0, length);
		var newview:Uint8Array3 = new Uint8Array3(newBuffer, 0, length); 
		(newview as Object).set(view);      // memcpy                        
		rawBytes = newBuffer;
	}
	
	public function compress(algorithm:String = "zlib"):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.compress() $$$$");
		
	}
	
	public function uncompress(algorithm:String = "zlib"):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.uncompress() $$$$");
		
	}
	
	
	public function writeByte(value:int):void
	{
		checkAndResizeBuffer(1);
		
		var view:Int8Array = new Int8Array(rawBytes);
		view[position++]  = int(value); // ~~ is cast to int in js...
		if (position > length)
			length = position;
	}
	
	
	public function readByte():int
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Int8Array = new Int8Array(rawBytes); 
		return view[position++];  
	}
	
	
	public function writeUnsignedByte(value:uint):void
	{
		checkAndResizeBuffer(1);
		
		var view:Uint8Array = new Uint8Array(rawBytes);
		view[position++] = int(value)  & 0xff; // ~~ is cast to int in js...
		if (position > length)
			length = position;
	}
	
	
	public function readUnsignedByte():uint
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Uint8Array = new Uint8Array(rawBytes); 
		return view[position++];
	}
	
	public function writeBoolean(value:Boolean):void
	{
		checkAndResizeBuffer(1);
		
		var view:Int8Array = new Int8Array(rawBytes);
		view[position++]  = (value) ? 1 : 0; // ~~ is cast to int in js...
		if (position > length)
			length = position;
	}
	
	public function readBoolean():Boolean
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Int8Array = new Int8Array(rawBytes); 
		return view[position++] == 1;
	}
		
	public function writeShort(value:int):void
	{
		checkAndResizeBuffer(2);
		
		var view:Int16Array = new Int16Array(rawBytes);
		if ( (position & 1) == 0)
		{
			view[position >> 1] = int(value);
		}
		else
		{
			var view3:Int16Array3 = new Int16Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = int(value);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 2);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 2);
			(viewA as Object).set(viewB);
		}
		position += 2;
		if (position > length)
			length = position;
	}
	
	public function readShort():int
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Int16Array = new Int16Array(rawBytes); 
		var r:int;
		if ( (position & 1) == 0)
		{
			var np:int = position >> 1;
		 	r = view[np];
		}
		else
		{
			var view3:Int16Array3 = new Int16Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 2);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 2);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 2;
		return r;
	}
	
	public function writeUnsignedShort(value:uint):void
	{
		checkAndResizeBuffer(2);
		
		var view:Uint16Array = new Uint16Array(rawBytes);
		if ( (position & 1) == 0)
		{
			view[position >> 1] = int(value) & 0xffff;
		}
		else
		{
			var view3:Uint16Array3 = new Uint16Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = int(value) & 0xffff;
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 2);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 2);
			(viewA as Object).set(viewB);
		}
		position += 2;
		if (position > length)
			length = position;
	}
	
	public function readUnsignedShort():uint
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Uint16Array = new Uint16Array(rawBytes); 
		var r:int;
		if ( (position & 1) == 0)
		{
			var np:int = position >> 1;
			r = view[np];
		}
		else
		{
			var view3:Uint16Array3 = new Uint16Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 2);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 2);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 2;
		return r;
	}
	
	public function writeInt(value:int):void
	{
		checkAndResizeBuffer(4);
		
		var view:Int32Array = new Int32Array(rawBytes);
		if ( (position & 3) == 0)
		{
			view[position >> 2] = int(value);
		}
		else
		{
			var view3:Int32Array3 = new Int32Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = int(value);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewA as Object).set(viewB);
		}
		position += 4;
		if (position > length)
			length = position;
	}
	
	public function readInt():int
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Int32Array = new Int32Array(rawBytes);
		var r:int;
		if ( (position & 3) == 0)
		{
			var np:int = position >> 2;
			r = view[np];
		}
		else
		{
			var view3:Int32Array3 = new Int32Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 4;
		return r;
	}
	
	public function writeUnsignedInt(value:uint):void
	{
		checkAndResizeBuffer(4);
		
		var view:Uint32Array = new Uint32Array(rawBytes);
		if ( (position & 3) == 0)
		{
			view[position >> 2] = int(value) & 0xffffffff;
		}
		else
		{
			var view3:Uint32Array3 = new Uint32Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = int(value) & 0xffffffff;
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewA as Object).set(viewB);
		}
		position += 4;
		if (position > length)
			length = position;
	}
	
	public function readUnsignedInt():uint
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Uint32Array = new Uint32Array(rawBytes); 
		var r:int;
		if ( (position & 3) == 0)
		{
			var np:int = position >> 2;
			r = view[np];
		}
		else
		{
			var view3:Uint32Array3 = new Uint32Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 4;
		return r;
	}
	
	
	
	public function writeFloat(value:Number):void
	{
		checkAndResizeBuffer(4);
		
		var view:Float32Array = new Float32Array(rawBytes);
		if ( (position & 3) == 0)
		{
			view[position >> 2] = value;
		}
		else
		{
			var view3:Float32Array3 = new Float32Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = value;
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewA as Object).set(viewB);
		}
		position += 4;
		if (position > length)
			length = position;
	}
	
	public function writeDouble(value:Number):void
	{
		checkAndResizeBuffer(8);
		
		var view:Float64Array = new Float64Array(rawBytes);
		if ( (position & 7) == 0)
		{
			view[position >> 3] = value;
		}
		else
		{
			var view3:Float64Array3 = new Float64Array3(tempUnalignedBuffer, 0, 1);
			view3[0] = value;
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 8);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 8);
			(viewA as Object).set(viewB);
		}
		position += 8;
		if (position > length)
			length = position;
	}
	
	public function readFloat():Number
	{
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Float32Array = new Float32Array(rawBytes); 
		var r:int;
		if ( (position & 3) == 0)
		{
			var np:int = position >> 2;
			r = view[np];
		}
		else
		{
			var view3:Float32Array3 = new Float32Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 4);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 4);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 4;
		return r;
	}
	
	public function readDouble():Number
	{
		
		if (position >= length )
			throw new Error("ByteArray out of bounds read. Positon="+position+", Length="+length); 
		var view:Float64Array = new Float64Array(rawBytes); 
		var r:int;
		if ( (position & 7) == 0)
		{
			var np:int = position >> 3;
			r = view[np];
		}
		else
		{
			var view3:Float64Array3 = new Float64Array3(tempUnalignedBuffer, 0, 1);
			var viewA:Uint8Array3 = new Uint8Array3(rawBytes, position, 8);
			var viewB:Uint8Array3 = new Uint8Array3(tempUnalignedBuffer, 0, 8);
			(viewB as Object).set(viewA);
			r = view3[0];
		}
		position += 8;
		return r;
	}
	
	public function readMultiByte(length:uint, charSet:String):String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readMultiByte() $$$$");
		return null;
	}
	
	public function readUTF():String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTF() $$$$");
		return null;
	}
	
	public function readUTFBytes(length:uint):String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTFBytes() $$$$");
		return null;
	}
	
	public function readObject():*
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readObject() $$$$");
		return null;
	}
	
	public function readBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBytes() $$$$");
	}
	
	public function get objectEncoding():uint
	{
		return 0;
	}
	
	public function set objectEncoding(version:uint):void
	{
	}
	
	private var _endian:String = Endian.LITTLE_ENDIAN;
	public function get endian():String
	{
		return _endian;
	}
	
	public function set endian(type:String):void
	{
		_endian = type;
	}
	
	public function writeBytes(bytes:ByteArray, offset:uint=0, length:uint=0):void
	{
		length = (length == 0) ? bytes.length : length;
		checkAndResizeBuffer(length);
		
		var writeTo:Uint8Array3 = new Uint8Array3(rawBytes, position, length);
		var readFrom:Uint8Array3 = new Uint8Array3(bytes.rawBytes, offset, length);
		(writeTo as Object).set(readFrom);
	}
	
	public function writeMultiByte(value:String, charSet:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeMultiByte() $$$$");
	}
	
	public function writeUTF(value:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTF() $$$$");
	}
	
	public function writeUTFBytes(value:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTFBytes() $$$$");
	}
	
	public function writeObject(object:*):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeObject() $$$$");
	}
}
}