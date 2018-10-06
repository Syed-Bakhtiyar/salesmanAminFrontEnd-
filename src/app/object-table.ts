
export class ObjectsTable<ObjectInterface> {
    objects: ObjectInterface[] = [];
    pages = 0;
    page = 1;
    perPage = 10;
    selectedIndexes: number[] = [];
    isSelectAll = false;
    expandedRowIndex: number;
    expandedRowType: string;
    removeSelectedObjectsDisabled = false;

    setPage( page: number ) {
        this.page = page;
    }

    setPerPage( perPage: number ) {
        this.perPage = perPage;
    }

    update() {
    }

    setDefaults() {
        this.objects = [];
        this.pages = null;
        this.page = 1;
        this.selectedIndexes = [];
        this.isSelectAll = false;
        this.expandedRowIndex = null;
        this.expandedRowType = null;
        this.removeSelectedObjectsDisabled = false;
    }

    reset() {
        this.setDefaults();
        this.update();
    }

    updateField( name: string, value: any, object: ObjectInterface, input: EditableFieldComponent = null, update: boolean = false ) {
    }

    removeObject( index: number ) {
    }

    removeSelectedObjects() {
    }

    toggleSelectAll() {
        if ( this.isSelectAll ) {
            this.resetSelectedIndexes();
        } else {
            for ( let index = 0; index < this.objects.length; index++ ) {
                this.selectedIndexes.push( index );
            }
        }
        this.isSelectAll = !this.isSelectAll;
    }

    toggleSelect( index: number ) {
        if ( !this.isChecked( index ) ) {
            this.selectedIndexes.push( index );
        } else {
            this.selectedIndexes.splice( this.selectedIndexes.indexOf( index ), 1 );
        }
    }

    isChecked( index: number ): boolean {
        return this.selectedIndexes.indexOf( index ) !== -1;
    }

    resetSelectedIndexes() {
        this.selectedIndexes = [];
    }

    rowExpanded( type: string, index: number ) {
        return this.expandedRowIndex === index && this.expandedRowType === type;
    }

    toggleRow( type: string, index: number ) {
        if ( this.rowExpanded( type, index ) ) {
            this.expandedRowIndex = null;
            this.expandedRowType = null;
        } else {
            this.expandedRowIndex = index;
            this.expandedRowType = type;
        }
    }
}
