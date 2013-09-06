function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
  return sValue;
}

function JXONTree (oXMLParent) {
  this.nAttrLen = 0;
  var nLength = 0, sCollectedTxt = "";
  if (oXMLParent.hasChildNodes()) {
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; } // nodeType is "Text" (3) or "CDATASection" (4)
      else if (oNode.nodeType === 1 && !oNode.prefix) { // nodeType is "Element" (1)
        sProp = oNode.nodeName;//.toLowerCase();
        vContent = new JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; nLength++; }
      }
    }
    this.keyValue = parseText(sCollectedTxt);
  } else { this.keyValue = null; }
  if (oXMLParent.hasAttributes()) {
    var oAttrib;
    this.keyAttributes = {};
    for (this.nAttrLen; this.nAttrLen < oXMLParent.attributes.length; this.nAttrLen++) {
      oAttrib = oXMLParent.attributes.item(this.nAttrLen);
      this.keyAttributes[oAttrib.name] = parseText(oAttrib.value.trim());
    }
  }
}

JXONTree.prototype.valueOf = function () { return this.keyValue; };
JXONTree.prototype.toString = function () { return String(this.keyValue); };
JXONTree.prototype.getItem = function (nItem) {
  if (nLength === 0) { return null; }
  var nCount = 0;
  for (var sKey in this) { if (nCount === nItem) { return this[sKey]; } nCount++; }
  return null;
};
JXONTree.prototype.attribute = function (nAttrId) {
  if (this.nAttrLen === 0 || nAttrId + 1 > this.nAttrLen) { return null; }
  for (var sAttrName in this.keyAttributes) { 
  	if (sAttrName === nAttrId) { return this.keyAttributes[sAttrName]; }  
  }
  return null;
};
JXONTree.prototype.hasChildren = function () { return this.keyLength > 0; };