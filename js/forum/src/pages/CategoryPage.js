import Page from 'flarum/components/Page';
import PrimaryTagView from './../components/PrimaryTagView';
import sortTags from 'flarum/tags/utils/sortTags';

export default class CategoryPage extends Page
{
    init() {
        super.init();

        this.tags = sortTags(app.store.all('tags').filter(tag => tag.isPrimary()));
    }

    view() {
        return m(
            'div',
            {className: 'TagsPage'},
            m('div', {className: 'container'}, m(
                'div',
                {className: 'TagsPage-content'},
                m('ul', {className: 'Koseki--Categories TagTiles'}, this.tags.map(tag => PrimaryTagView.component({tag})))
            ))
        );
    }
}
