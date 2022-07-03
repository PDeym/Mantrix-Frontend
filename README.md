# Metronic Template

## Installation

1. clone metronic-template here git@github.com:WebAppDevTech/metronic-template.git
2. npm install
3. makesure all repos are checkout as main
4. npm run serve
5. eat your favorite junkfood and wait while building

** submodules is not automatically added **
## ADDING SUBMODULES ##
**Clone and Init Submodule**
- COMMAND: git clone http://10.50.4.9:8001/PAIS/vue-frontend.git src/modules/pais-template
- COMMAND: git submodule init

**after initializing submodule then add to .gitmodules**

> ex: [submodule "src/modules/pais-template"]

>	path = src/modules/pais-template

>	url = http://10.50.4.9:8001/PAIS/vue-frontend.git

>	branch = master


## NOTE
Before adding plugins and thirdparty shitties
please contact @baniagaeugene @henrillics @c0smic for approval

## IMPORTANT: Create your own copy of files, please see the example [filename].example.[filetype]
1. .env = location: rootFolder
2. Module.ts = location: src->modules->pais-template
3. Store.ts = location: src->modules->pais-template

* if you have submodules other than pais-template
* you can also see the references of current configuration of submodules on : 
4. .gitmodules = location: gitmodules/[projectsample].gitmodules

