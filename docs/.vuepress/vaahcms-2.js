let sidebar;

sidebar = [

    {
        text: 'PROLOGUE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'The VaahCMS 2.x', link: '/vaahcms-2/'},
        ]
    },
    {
        text: 'BACKEND',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Overview', link: '/vaahcms-2/backend/index.md'},
            {text: 'Dashboard', link: '/vaahcms-2/backend/dashboard.md'},
            {text: 'Sample', link: '/vaahcms-2/backend/sample.md'},
            {text: 'Generate Module', link: '/vaahcms-2/backend/generate-module.md'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}
