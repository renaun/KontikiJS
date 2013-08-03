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
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.utils.FlashTimingEngine;
	
	import randori.webkit.dom.Element;
	import randori.webkit.page.Window;

public dynamic class DisplayObjectContainer extends InteractiveObject
{
	public function DisplayObjectContainer()
	{
	}
	
	public var tabChildren:Boolean = false;
	public var mouseChildren:Boolean = false;

	public function get numChildren():int
	{
		return children.length;
	}

	
	// Helper Implementation Properties
	protected var children:Array = [];
	public function addChild(child:*):DisplayObject
	{		
		child._parent2 = this;
		
		addChildAt(child, children.length-1);
		
		return child;
	}
	public function addChildAt(child:DisplayObject, index:int):DisplayObject
	{
		// Add the root
		if (!child.root)
			child.root = FlashTimingEngine.root;
		
		if (child.parent)
			child.parent.removeChild(child);
		
		child._parent2 = this;
		children = children.splice(index, 0, child);
		
		// TODO Make this work for index properly
		if (child.domElement)
		{
			var element:Element = (!domElement || !this.parent) ? Window.document.body : domElement;
			element.appendChild(child.domElement);
		}
		return child;
	}
	
	public function getChildAt(index:int):DisplayObject
	{
		for (var i:int = 0; i < children.length; i++) 
		{
			if (i == index)
				return children[i];
		}
		return null;
	}
	
	public function getChildIndex(child:DisplayObject):int
	{
		for (var i:int = 0; i < children.length; i++) 
		{
			if (children[i] == child)
				return i;
		}
		return -1;
	}
	
	public function getChildByName(name:String):DisplayObject
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.getChildByName() $$$$");
		return null;
	}
	
	public function setChildIndex(child:DisplayObject, index:int):void
	{
		removeChild(child);
		addChildAt(child, index);
	}
	
	public function swapChildren(child1:DisplayObject, child2:DisplayObject):void
	{
		
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildren() $$$$");
	}
		
	public function swapChildrenAt(index1:int, index2:int):void
	{
		
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildrenAt() $$$$");
	}
	
	public function contains(child:DisplayObject):Boolean
	{
		return getChildIndex(child) > -1;
	}
	
	public function removeChild(child:DisplayObject):DisplayObject
	{
		child._parent2 = null;
		for (var i:int = 0; i < children.length; i++) 
		{
			if (children[i] == child)
			{
				return removeChildAt(i);
			}
		}
		return child;
	}
	public function removeChildAt(index:int):DisplayObject 
	{
		var c:DisplayObject = children[index];
		c._parent2 = null;
		children.splice(index,1);
		return c;
	}
	
	/**
	 * 	Helper function for bubbling events
	 */
	public function bubbleEvent(event:Event):void
	{
		for (var i:int = 0; i < children.length; i++) 
		{
			if (children[i] is EventDispatcher)
				(children[i] as EventDispatcher).dispatchEvent(event);
		}
	}
}
}