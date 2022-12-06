const router=require('express').Router();
const {
    getThoughts,
    getAThought,
    think,
    reThink,
    unThink,
    react,
    removeReact,
}=require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(think);

router.route('/:thoughtId').get(getAThought).put(reThink).delete(unThink);

router.route('/:thoughtId/reactions').post(react);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReact);

module.exports=router;