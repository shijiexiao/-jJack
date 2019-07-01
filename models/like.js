import { HTTP } from "../util/http";

class LikeModel extends HTTP
{
    /**
     * 
     * @param {* like or  cancel} behavior 
     * @param {* movie id} artID 
     * @param {* type} category 
     */
    like ( behavior, artID, category )
    {
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        this.request( {
            url: url,
            method: "POST",
            data: {
                art_id: artID,
                type: category
            }
        } )
    }
    getClassicLikeStatus ( artID, category, sCallback )
    {
        this.request( {
            url: 'classic/' + category + '/' + artID + '/favor',
            success: sCallback
        } )
    }
}

export { LikeModel } 