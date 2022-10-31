const router=require('express').Router();
const {
    getThoughts,
    getAThought,
    Think,
    reThink,
    unThink,
    react,
    removeReact,
}=require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(Think);

router.route('/:thoughtid').get(getAThought).put(reThink).delete(unThink);

router.route('/:thoughtid/reactions').post(react).delete(removeReact);