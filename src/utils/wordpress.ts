export interface WPMangaItem {
    title: string,
    url: string,
    type: string
}

export interface WPSearchResponse {
    success: boolean
    data: WPMangaItem[]
}