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

package flash.globalization
{
public class DateTimeFormatter
{
	public function DateTimeFormatter(requestedLocaleIDName:String, dateStyle:String = "long", timeStyle:String = "long")
	{
	}
	
	public function getMonthNames(nameStyle:String = "full", context:String = "standalone"):Vector.<String>
	{
		var months:Vector.<String> = new Vector.<String>();
		months.push("January");
		months.push("February");
		months.push("March");
		months.push("April");
		months.push("May");
		months.push("June");
		months.push("July");
		months.push("August");
		months.push("Spetember");
		months.push("October");
		months.push("November");
		months.push("December");
		return months;
	}
}
}