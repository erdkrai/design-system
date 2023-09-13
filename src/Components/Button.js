import React from 'react';

import { Button } from 'dashboard-components-library';

const ButtonDemo = () => {
    return (
        <div className="flex flex-row gap-10 p-10 w-fit">
            <Button text="Create User"> </Button>
            <Button text="Create User" buttonType="Secondary"> </Button>
        </div>
    );
};

export default ButtonDemo;