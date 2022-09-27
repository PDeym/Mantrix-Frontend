# Metronic Template

## Installation

1. clone metronic-template here http://10.50.4.9:8001/metronic-template/vue.git
2. npm install
3. ** ADDING SUBMODULES ** <br>
    **Don't forget to pais-template**
    1. Create file .gitmodules on the root directory.
    2. Inside the .gitmodules add your submodule details. Example below.
        <details>
            <summary markdown="span"> <b>EXAMPLE OF ADDING SUBMODULES ON .gitmodules</b> </summary>
            <b>[submodule "src/modules/pais-template"]</b><br>
    	    <b>path = src/modules/pais-template</b><br>
    	    <b>url = http://10.50.4.9:8001/PAIS/vue-frontend.git</b><br><br>
    
            <b>[submodule "src/modules/cmis"]</b><br>
            <b>path = src/modules/cmis</b><br>
            <b>url = http://10.50.4.9:8001/PAHRMISV2/frontend/cmis.git</b><br>
            <b>branch = main</b><br><br>
            <b>[submodule "src/modules/orderpub"]</b><br>
            <b>path = src/modules/orderpub</b><br>
            <b>url = http://10.50.4.9:8001/PAHRMISV2/frontend/opis.git</b><br>
            <b>branch = develop</b>
    	
        </details>
    >
    3. Clone the module that you have added in the file .gitmodules. Example below.<br>
        **COMMAND: git clone http://10.50.4.9:8001/PAIS/vue-frontend.git src/modules/pais-template<br>**
4. Rename **src->modules->Module.ts.sample to Module.ts** and modify based on your added modules
5. Rename **src->modules->Store.ts.sample to Store.ts** and modify based on your added modules
6. makesure all repos are checkout as main or develop
7. npm run serve
8. eat your favorite junkfood and wait while building

**Submodules is not automatically added**
<details>
  <summary markdown="span"> DEFAULT SUBMODULES DETAILS </summary>
    <details>
        <summary markdown="span"> PAIS-TEMPLATE </summary>
        [submodule "src/modules/pais-template"]<br>
    	path = src/modules/pais-template<br>
    	url = http://10.50.4.9:8001/PAIS/vue-frontend.git<br>
    	branch = main 
	</details>
	
    <details>
        <summary markdown="span"> CMIS </summary>
        [submodule "src/modules/cmis"]<br>
    	path = src/modules/cmis<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/cmis.git<br>
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> PAPIS </summary>
        [submodule "src/modules/papis"]<br>
    	path = src/modules/papis<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/papis.git<br>
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> Retirment IS </summary>
        [submodule "src/modules/ris"]<br>
    	path = src/modules/ris<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/retirement-is.git<br>
    	branch = main 
	</details>
	
    <details>
        <summary markdown="span"> ORDER PUB </summary>
        [submodule "src/modules/opis"]<br>
    	path = src/modules/opis<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/opis.git<br>
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> MPF </summary>
        [submodule "src/modules/mpf"]<br>
    	path = src/modules/mpf<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/mpf.git<br>
    	branch = develop 
	</details>
	
    <details>
        <summary markdown="span"> DIRS </summary>
        [submodule "src/modules/diras"]<br>
    	path = src/modules/diras<br>
    	url = http://10.50.4.9:8001/PAHRMISV2/frontend/dental.git<br>
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