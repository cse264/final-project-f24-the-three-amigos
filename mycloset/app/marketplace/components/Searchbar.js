
export const Searchbar = () => {
    return(
        <div style={{width: '100%', height: '100%', paddingTop: 27, paddingBottom: 787, paddingLeft: 249, paddingRight: 295, background: '#FAEDCD', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 896, alignSelf: 'stretch', paddingLeft: 30, paddingRight: 30, background: '#FEFAE0', borderRadius: 30, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{width: 44, height: 44, position: 'relative'}}>
                <div style={{width: 33, height: 33, left: 5.50, top: 5.50, position: 'absolute', background: '#1E1E1E', border: '2px black solid'}}></div>
            </div>
            <div style={{flex: '1 1 0', color: 'black', fontSize: 32, fontFamily: 'Climate Crisis', fontWeight: '400', wordWrap: 'break-word'}}>Search...</div>
        </div>
    </div>
    )
}