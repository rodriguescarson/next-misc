export default function handler(req, res) {
    res.setPreviewData({ user: 'Carson' })
    //    res.end('preview mode enabled')
    res.redirect(req.query.redirect)
}

