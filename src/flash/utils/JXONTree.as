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

package flash.utils
{
	import randori.webkit.dom.Element;

public class JXONTree
{
	private var nAttrLen:int;
	private var keyValue:*;
	private var keyAttributes:Object;
	private var keyLength:int;
	private var nLength:int;
	private var _localName:String;
	
	public function JXONTree(oXMLParent:Element)
	{
		nAttrLen = 0;
		nLength = 0;
		var sCollectedTxt:String = "";
		_localName = oXMLParent.localName;
		if (oXMLParent.hasChildNodes()) 
		{
			var oNode:Element;
			var sProp:String;
			var vContent:JXONTree; 
			for (var nItem:int = 0; nItem < oXMLParent.childNodes.length; nItem++) {
				oNode = oXMLParent.childNodes.item(nItem);
				if ((oNode.nodeType - 1 | 1) === 3) 
				{ 
					sCollectedTxt += (oNode.nodeType === 3) ? (oNode.nodeValue as Object).trim() : oNode.nodeValue; 
				} // nodeType is "Text" (3) or "CDATASection" (4)
				else if (oNode.nodeType === 1 && !oNode.prefix) 
				{ // nodeType is "Element" (1)
					sProp = oNode.nodeName;//.toLowerCase();
					vContent = new JXONTree(oNode);
					if (this.hasOwnProperty(sProp)) 
					{
						if (this[sProp].constructor !== Array) 
						{ 
							this[sProp] = [this[sProp]]; 
						}
						this[sProp].push(vContent);
					} 
					else 
					{ 
						this[sProp] = vContent; 
						nLength++; 
					}
				}
			}
			keyValue = parseText(sCollectedTxt);
		} else 
		{ 
			keyValue = null; 
		}
		if (oXMLParent.hasAttributes()) {
			var oAttrib:Object;
			keyAttributes = {};
			for (nAttrLen; nAttrLen < oXMLParent.attributes.length; nAttrLen++) {
				oAttrib = oXMLParent.attributes.item(nAttrLen);
				keyAttributes[oAttrib.name] = parseText(oAttrib.value.trim());
			}
		}
	}
	
	public function parseText(sValue:*):*
	{
		if (/^\s*$/.test(sValue)) { return null; }
		if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
		if (isFinite(sValue)) { return parseFloat(sValue); }
		if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
		return sValue;
	}
	
	public function valueOf():String { return keyValue; }
	public function toString():String { return String(keyValue); }
	public function getItem(nItem):Object {
		if (nLength === 0) { return null; }
		var nCount:int = 0;
		for (var sKey:* in this) { if (nCount === nItem) { return this[sKey]; } nCount++; }
		return null;
	}
	public function localName():String { return _localName; }
	public function attribute(nAttrId:*):* {
		if (nAttrLen === 0 || nAttrId + 1 > nAttrLen) { return null; }
		for (var sAttrName:* in keyAttributes) { 
			if (sAttrName === nAttrId) { return keyAttributes[sAttrName]; }  
		}
		return null;
	}
	public function hasChildren():Boolean { return keyLength > 0; }
}
}