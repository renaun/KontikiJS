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

package flash.system
{
//import avmplus.Domain;

import flash.utils.ByteArray;

public class ApplicationDomain 
{
	public static function get MIN_DOMAIN_MEMORY_LENGTH():uint
	{
		return 0;//Domain.MIN_DOMAIN_MEMORY_LENGTH;
	}
	
	protected static var cD:ApplicationDomain;
	public static function get currentDomain():*
	{
	//	if (!cD)
	//		cD= new ApplicationDomain();
		return new Object();//Domain.currentDomain;
	}
	
	public function ApplicationDomain(parentDomain:* = null)
	{
		//domainMemory = new ByteArray();
	}
	
	public function get domainMemory():ByteArray
	{
		return new ByteArray();//Domain.currentDomain.domainMemory;
	}

	public function set domainMemory(value:ByteArray):void
	{
		FlashAPILoggeer.log("ApplicationDomain::set domainMemory: "+ value);
		FlashAPILoggeer.log("ApplicationDomain::set domainMemory: "+ value.length);
		//Domain.currentDomain.domainMemory = value;
	}

	public function hasDefinition(name:String):Boolean { return true }
	public function getDefinition(name:String):Object { return new Object(); }
	
}
}