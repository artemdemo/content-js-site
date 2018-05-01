import * as conditioner from 'conditioner-core/conditioner-core.esm';

conditioner.addPlugin({
    // converts module aliases to paths
    // moduleSetName: name => `js/${name}.js`,

    // get the module constructor
    moduleGetConstructor: module => module.default,

    // override the import
    // set to "lazy" to create a separate chunk for each module
    moduleImport: name => import(
        /* webpackMode: "lazy" */
        /* webpackChunkName: "[request]" */
        `./modules/${name}`
    )
});

// Mount modules found in the subtree of the passed element.
// Will return an array of bound module objects.
conditioner.hydrate(document.documentElement);
