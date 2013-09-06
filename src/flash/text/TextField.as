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

package flash.text
{
import flash.display.InteractiveObject;

import randori.webkit.dom.Text;
import randori.webkit.page.Window;



public class TextField extends InteractiveObject
{
	public function TextField()
	{
		//textNode = Window.document.createTextNode();
		domElement = Window.document.createElement("div");
		domElement.style.setProperty("position", "absolute");
		domElement.style.setProperty("width", "auto");
		domElement.style.setProperty("height", "auto");
		//domElement.appendChild(textNode);
	}
	
	// HTML Properties
	//public var textNode:Text;

	public var background : Boolean = false;
	public var multiline : Boolean = false;
	public var embedFonts : Boolean = false;
	public var selectable : Boolean = false;
	public var wordWrap : Boolean = false;
	public var border : Boolean = false;
	
	public var autoSize:String = "";
	public var htmlText:String = "";
	public var type:String = "";
	public var restrict:String = "";
	public var maxChars:int = 0;
	public var selectionBeginIndex:int = 0;
	public var selectionEndIndex:int = 0;
	public var textColor:uint = 0;
	public var backgroundColor:uint = 0;
	public var borderColor:uint = 0;
	public var antiAliasType:String = "";
	
	private var _textHeight:Number = 0;
	private var _textWidth:Number = 0;
	
	// Implement setting textHeight, textWidth with new formats
	public var defaultTextFormat:TextFormat;
	
	
	private var _text:String = "";

	public function get textWidth():Number
	{
		return _textWidth;
	}

	public function set textWidth(value:Number):void
	{
		_textWidth = value;
	}

	public function get textHeight():Number
	{
		return _textHeight;
	}

	public function set textHeight(value:Number):void
	{
		_textHeight = value;
	}

	public function get text():String
	{
		return _text;
	}

	public function set text(value:String):void
	{
		_text = value;
		//textNode.data = _text;
		(domElement as Object).innerHTML = _text;
		calculateTextBounds(defaultTextFormat);
	}

	public function getTextFormat(beginIndex:int = -1, endIndex:int = -1):TextFormat { return new TextFormat() }
	public function setTextFormat(format:TextFormat, beginIndex:int = -1, endIndex:int = -1):void 
	{
		calculateTextBounds(format);
	}
	public function setSelection(beginIndex:int, endIndex:int):void {}
	public function appendText(newText:String):void { 
		text += newText;
	}
	
	public function calculateTextBounds(format:TextFormat):void
	{
		if (!format)
			return;
		var vis:String = domElement.style.getPropertyValue("visibility");
		vis = (vis) ? vis : "visible";
		domElement.style.setProperty("fontFamily", format.font);
		domElement.style.setProperty("fontSize", format.size+"");
		// TODO add format stuff (fontSize etc...)
		Window.document.body.appendChild(domElement);
		textWidth = domElement.clientWidth;
		textHeight = domElement.clientHeight;
		Window.document.body.removeChild(domElement);
		domElement.style.setProperty("visibility", vis);
	}
		
}
}