json.songs do
  json.array!(@songs) do |song|
    json.name song.name
    json.song_id song.id
  end
end