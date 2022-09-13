function MaterialData(props) {

    const { materials } = props

    if (!materials || materials.length === 0) return <p>Нет данных.</p>
    
    return (
        <div>
            <table>
                <thead  >
                    <tr>
                        <th>title</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map((material) =>
                            <tr key={material._id}>
                                <td>{material.title}</td>
                                <td></td> 
                            </tr>
                        )
                    }
                </tbody>
            </table>

      </div>
      
    )
}

export default MaterialData