# Metronic Template

## Installation

1. clone metronic-template here http://10.50.4.9:8001/metronic-template/vue.git
2. npm install
3. ## ADDING SUBMODULES ##
    **Don't forget to the pais-template**
    1. Create file .gitmodules on the root directory.
    2. Inside the .gitmodules add your submodule details. Example below.
        >	[submodule "src/modules/pais-template"]
	    >	path = src/modules/pais-template
	    >	url = http://10.50.4.9:8001/PAIS/vue-frontend.git
    3. Clone the module that you have added in the file .gitmodules. Example below.
        >	COMMAND: git clone http://10.50.4.9:8001/PAIS/vue-frontend.git src/modules/pais-template
4. Rename **src->modules->Module.ts.sample to Module.ts** and modify based on your added modules
5. Rename **src->modules->Store.ts.sample to Store.ts** and modify based on your added modules
6. makesure all repos are checkout as main or develop
7. npm run serve
8. eat your favorite junkfood and wait while building

**Submodules is not automatically added**

<details>
  <summary markdown="span"> ##SUBMODULES DETAILS## </summary>
    <details>
        <summary markdown="span"> PAIS-TEMPLATE </summary>
        [submodule "src/modules/pais-template"]
    	path = src/modules/pais-template
    	url = http://10.50.4.9:8001/PAIS/vue-frontend.git
    	branch = main 
	</details>
	
    <details>
        <summary markdown="span"> CMIS </summary>
        [submodule "src/modules/cmis"]
    	path = src/modules/cmis
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/cmis.git
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> PAPIS </summary>
        [submodule "src/modules/papis"]
    	path = src/modules/papis
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/papis.git
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> Retirment IS </summary>
        [submodule "src/modules/ris"]
    	path = src/modules/ris
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/retirement-is.git
    	branch = main 
	</details>
	
    <details>
        <summary markdown="span"> ORDER PUB </summary>
        [submodule "src/modules/opis"]
    	path = src/modules/opis
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/opis.git
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> MPF </summary>
        [submodule "src/modules/mpf"]
    	path = src/modules/mpf
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/mpf.git
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> DIRS </summary>
        [submodule "src/modules/diras"]
    	path = src/modules/diras
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/dental.git
    	branch = main 
	</details>
	
</details>



## NOTE
Before adding plugins and thirdparties
please contact @baniagaeugene @henrillics @c0smic for approval

## Starting mock API ##
1. Run the mock api by this command => "npm run mock"

Sample structure
[root folder]
> mock(folder)
    > transaction(folder)
        > list.js(file)

Routes should be 
localhost:3000/mockApi/[module]/[folder]-[folder]-[file].js