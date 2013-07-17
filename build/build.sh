## INSTRUCTIONS TO RUN
# Open a command prompt and from the RandoriExamples/ActionScriptThreeJS folder run:
# ./randori.sh

## PATH VALUES CHANGE FOR YOUR MACHINE
# Path to Randori Repos
repos=/Code/WebRelated/RandoriRepos
# Randori Compiler Path
ver=$1
#ver=
rc=$repos/randori-compiler-latest$ver
# Randori Libraries SWC
rlswc=$repos/randori-libraries/bin/randori-libraries.swc
# sdk-path
rsdk=$repos/randori-sdk/
# Source File Base Path
source=./
#-include-sources=""
include=$2
# Output folder
output=../bin/js

# Change into the source folder because of bug
cd ../src/
echo $output

# Run Randoir Compiler:
java -jar $rc/randori.jar randori.compiler.clients.Randori -sdk-path=$rsdk -library-path $rlswc -source-path $source $include -js-classes-as-files=false -app-name=kontiki -output $output

rm $output/randori*.js

#CREATE MINIFIED

# Constants
SERVICE_URL=http://closure-compiler.appspot.com/compile
NEWFILE=$output/kontiki-min.js

#code=`cat $output/kontiki.js`
code="--data-urlencode js_code@$output/kontiki.js"

# Send request
curl \
--url ${SERVICE_URL} \
--header 'Content-type: application/x-www-form-urlencoded' \
${code} \
--data output_format=json \
--data output_info=compiled_code \
--data output_info=statistics \
--data output_info=errors \
--data compilation_level=SIMPLE_OPTIMIZATIONS |

python -c '
import json, sys
data = json.load(sys.stdin)

if "errors" in data:
	print "### COMPILATION FAILED WITH ERRORS"
	for err in data["errors"]:
		file = sys.argv[int(err["file"].replace("Input_", "")) + 1]
		print "File: %s, %d:%d" % (file, err["lineno"], err["charno"])
		print "Error: %s" % err["error"]
		print "Line: %s" % err["line"]
		
	print "\nBuild failed.\n"
	
else:
	print "### COMPILATION COMPLETED"
	print "Original size: %db, gziped: %db" % (data["statistics"]["originalSize"], data["statistics"]["originalGzipSize"])
	print "Compressed size: %db, gziped: %db" % (data["statistics"]["compressedSize"], data["statistics"]["compressedGzipSize"])
	print "Compression rate: %.2f" % (float(data["statistics"]["compressedSize"]) / int(data["statistics"]["originalSize"]))

	filename = "'${NEWFILE}'"
	f = open(filename, "w")
	f.write(data["compiledCode"])

	print "\nBuild file %s created.\n" % filename
' $@
