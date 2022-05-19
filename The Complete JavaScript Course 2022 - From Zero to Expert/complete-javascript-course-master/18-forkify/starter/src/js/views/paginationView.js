import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn--inline');

			if (!btn) {
				return;
			}

			const goToPage = +btn.dataset.goto;

			handler(goToPage);
		});
	}

	_generateMarkupButtonNext(currentPage) {
		return `
            <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
	}

	_generateMarkupButtonPrevious(currentPage) {
		return `
            <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
        `;
	}

	_generateMarkup() {
		const currentPage = this._data.page;
		const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

		// Page 1 and there are other pages
		if (currentPage === 1 && numPages > 1) {
			return this._generateMarkupButtonNext(currentPage);
		}

		// Last page
		if (currentPage === numPages && numPages > 1) {
			return this._generateMarkupButtonPrevious(currentPage);
		}

		// Other page
		if (currentPage < numPages) {
			return [
				this._generateMarkupButtonPrevious(currentPage),
				this._generateMarkupButtonNext(currentPage)
			];
		}

		// Page 1 and there are NO other pages
		return '';
	}
}

export default new PaginationView();
