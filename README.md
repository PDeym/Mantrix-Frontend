# Metronic Template

## Installation

1. clone metronic-template here http://10.50.4.9:8001/metronic-template/vue.git
2. npm install
AFTER THIS STEP, PLEASE SEE ./install.txt to install submodules
3. makesure all repos are checkout as main
4. npm run serve
5. eat your favorite junkfood and wait while building

**Submodules is not automatically added**
## ADDING SUBMODULES ##
**Clone and Init Submodule**
- COMMAND: git clone http://10.50.4.9:8001/PAIS/vue-frontend.git src/modules/pais-template
- COMMAND: git submodule init

**After initializing submodule then add to [rootDirectory]/.gitmodules**

> ex: [submodule "src/modules/pais-template"]<br>
>	path = src/modules/pais-template <br>
>	url = http://10.50.4.9:8001/PAIS/vue-frontend.git <br> 
>	branch = master <br>


## NOTE
Before adding plugins and thirdparties
please contact @baniagaeugene @henrillics @c0smic for approval

## IMPORTANT: Create your own copy of files, please see the example [filename].example.[filetype]
1. .env = location: rootFolder
2. Module.ts = location: src->modules->pais-template
3. Store.ts = location: src->modules->pais-template

**If you have submodules other than pais-template,**<br>
**you can also see the references of current configuration of submodules on :**
4. .gitmodules = location: gitmodules/[projectsample].gitmodules

## Starting mock API ##
1. Run the mock api by this command => "npm run mock"

Sample structure
[root folder]
> mock(folder)
    > transaction(folder)
        > list.js(file)

Routes should be 
localhost:3000/mockApi/[module]/[folder]-[folder]-[file].js