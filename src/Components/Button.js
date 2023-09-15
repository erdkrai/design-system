import React from 'react';

import { Button } from 'dashboard-components-library';

const ButtonDemo = () => {
    return (
        <div className="flex flex-row gap-24 w-fit">
            <Button text="Primary Button Type" buttonType="Primary"> </Button>
            <Button text="Secondary Button Type" buttonType="Secondary"> </Button>
            <Button text="Success Button Type" buttonType="Success"> </Button>
            <Button text="Destructive Button Type" buttonType="Delete"> </Button>
        </div>
    );
};

export default ButtonDemo;