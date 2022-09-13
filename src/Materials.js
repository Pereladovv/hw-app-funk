import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MaterialData from './Components/MaterialData'
import OnLoadingMaterialData from './Components/OnLoadingMaterialData'

function Materials() {

    const DataLoading =  OnLoadingMaterialData(MaterialData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            materials: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = 'https://test.goryachev.koleso.dev.sebekon.ru/materials';

        axios.get(apiUrl).then((resp) => {
                const allMaterials = resp.data;
                setAppState({
                    loading: false,
                    materials: allMaterials
                });
            });
        }, [setAppState]

    );


    return (
        <div className="wrapperTwo">
            <DataLoading isLoading={appState.loading} materials={appState.materials} />
        </div>

    );
}

export default Materials;