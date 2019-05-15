webpack.config.js
    Use the keyword "rules" instead of "loaders" as "loaders" is used only in webpack version < 4.

npm_modules
    babel_packages
        Install the latest babel packages
            -- core (using command: npm install @babel/core)
            -- preset-env (using command: npm install @babel/preset-env)
            -- preset-react (using command: npm install @babel/preset-react)
        These latest babel packages must be installed in order to use babel-loader(v8.0.5)

.babelrc
    Include the latest babel presets that was downloaded in the above steps
    {"presets":["@babel/preset-env","@babel/preset-react"]}