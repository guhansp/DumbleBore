import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date, popularity }: Movie) => {
    const fullStars = Math.floor(vote_average / 2);
    const hasHalfStar = (vote_average / 2) % 1 >= 0.5;
    return (
        <Link href={`/movie/${id}` as any} asChild  >
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: poster_path ?
                            `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png'
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center justify-between'>
                    <View className='flex-row'>
                        {
                            Array.from({ length: fullStars }).map((_, index) => (
                                <Image key={index} source={icons.star} className='size-3' />
                            ))

                        }
                        {
                            hasHalfStar && <Image source={icons.hstar} className='size-3' />
                        }

                    </View>

                    <Text className='text-white text-xs'>{(vote_average / 2).toFixed(1)}</Text>



                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'> {release_date?.split('-')[0]}</Text>
                    <Text className='text-xs font-medium text-light-300 uppercase'></Text>
                </View>




            </TouchableOpacity>
        </Link >
    )
}

export default MovieCard