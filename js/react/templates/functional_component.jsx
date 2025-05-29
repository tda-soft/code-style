'use strict';

// Imports
import React, { useEffect, useState } from 'react';

// Constants
const MODE = {
    DEFAULT: 'default'
}

// Store
export default function COMPONENT_NAME(props) {
    const { t } = I18n;

    /** Refs */

    /** State */
    const [mode, setMode] = useState(MODE.DEFAULT)


    /** Variables */


    /** Lifecycle */
    useEffect(() => load(), [])


    /** Actions */
    function load() {

    }

    /** Callbacks */
    function onClick() {

    }

    /** Rendering */
    return (
        <div>
            hello :)
        </div>
    )
}