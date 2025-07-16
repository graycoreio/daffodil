
export interface MagentoCmsPageRoute {
  /**
   * The relative path for the route.
   */
  relative_url: string;

  /**
   * The type of route, typically PRODUCT, CATEGORY or CMS_PAGE
   */
  type: 'CMS_PAGE';

  /**
   * The HTTP code for the page.
   */
  redirect_code: number;

  content?: string;
  content_heading?: string;
  identifier?: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_title?: string;
  page_layout?: string;
  title?: string;
  url_key?: string;
}
