function News({ data }) {
    return <h1 className="layout-content">{data}</h1>
}
export default News

export async function getStaticProps(context) {
    //set keys and stuff
    console.log('Get Static Props', context.previewData)
    return {
        props: {
            data: context.preview ?
                'List of draft articles' :
                'List of published articles'
        }
    }
}