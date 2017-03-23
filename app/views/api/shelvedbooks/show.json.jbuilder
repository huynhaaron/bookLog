
# json.extract! @shelvedbook, :book_id, :bookshelf_id
json.partial! 'api/shelvedbooks/shelvedbook', shelvedbook: shelvedbook

json.partial! 'api/shared/item', item: @item
