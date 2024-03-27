import React, { useState } from 'react'
import { Button } from './ui/button'
import { SearchIcon } from 'lucide-react'
import { CommandDialogDemo } from './CommandDialog'

export default function Searchbar() {
    const [ dialogOpen, setDialogOpen ] = useState(false);

    const toggleDialog = () => {    
        setDialogOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className='flex min-w-80'>
            <Button variant="outline" className='pl-2 pr-2 min-w-full flex gap-3 justify-between rounded-lg' onClick={toggleDialog}>
                <div className='flex items-center'>
                <SearchIcon size={14} strokeWidth={1.5}/>
                <p className='text-[#CFD1D4] font-light pl-2'>Search something here..</p>
                </div>
                <div>
                    <CommandDialogDemo isOpen={dialogOpen}/>
                </div>
            </Button>
        </div>
    )
}
